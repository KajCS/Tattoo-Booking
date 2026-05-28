<?php

namespace App\Http\Controllers;

use App\Domains\Users\Models\User;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Str;          // 🟢 FIXED: Missing import
use Illuminate\Support\Facades\Auth; // 🟢 FIXED: Missing import

class SocialAuthController extends Controller
{
    public function redirectToGithub()
    {
        return Socialite::driver('github')->stateless()->redirect();
    }

    public function handleGithubCallback()
    {
        try {
            $githubUser = Socialite::driver('github')->stateless()->user();

            $user = User::where('email', $githubUser->getEmail())->first();

            if (!$user) {
                // GitHub provides a 'nickname' (handle) which makes a perfect username!
                $baseUsername = $githubUser->getNickname() ?? explode('@', $githubUser->getEmail())[0]; 
                $uniqueUsername = Str::slug($baseUsername) . '_' . Str::lower(Str::random(4));

                $user = User::create([
                    'name'      => $githubUser->getName() ?? $githubUser->getNickname(),
                    'email'     => $githubUser->getEmail(),
                    'github_id' => $githubUser->getId(),
                    'avatar'    => $githubUser->getAvatar(),
                    'username'  => $uniqueUsername, // 🟢 FIXED: GitHub won't break database constraints now
                    'role'      => 'customer',
                    'is_active' => true,
                ]);
            } else {
                $user->update([
                    'github_id' => $githubUser->getId(),
                    'avatar'    => $githubUser->getAvatar(),
                ]);
            }

            Auth::login($user);
            $token = $user->createToken('auth_token')->plainTextToken;

            return redirect()->away(env('FRONTEND_URL', 'http://localhost:3000') . '/auth/callback?token=' . $token);

        } catch (\Exception $e) {
            \Log::error('GitHub OAuth Error: ' . $e->getMessage());
            return redirect()->to(env('FRONTEND_URL', 'http://localhost:3000') . '/login?error=oauth_failed');
        }
    }

    public function redirectToGoogle()
    {
        return Socialite::driver('google')->stateless()->redirect();
    }

    public function handleGoogleCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->stateless()->user();

            $user = User::where('email', $googleUser->getEmail())->first();

            if (!$user) {
                $baseUsername = explode('@', $googleUser->getEmail())[0]; 
                $uniqueUsername = Str::slug($baseUsername) . '_' . Str::lower(Str::random(4));

                $user = User::create([
                    'name'      => $googleUser->getName(),
                    'email'     => $googleUser->getEmail(),
                    'google_id' => $googleUser->getId(),
                    'avatar_url'    => $googleUser->getAvatar(),
                    'username'  => $uniqueUsername,
                    'role'      => 'customer',
                    'is_active' => true,
                ]);
            } else {
                $user->update([
                    'google_id' => $googleUser->getId(),
                    'avatar'    => $googleUser->getAvatar(),
                ]);
            }

            Auth::login($user);
            $token = $user->createToken('auth_token')->plainTextToken;

            // Added default fallback URL just in case FRONTEND_URL is missing in .env
            return redirect()->to(env('FRONTEND_URL', 'http://localhost:3000') . '/auth/callback?token=' . $token);

        } catch (\Exception $e) {
            \Log::error('Google OAuth Error: ' . $e->getMessage());
            return redirect()->to(env('FRONTEND_URL', 'http://localhost:3000') . '/login?error=oauth_failed');
        }
    }
}