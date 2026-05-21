<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class SocialAuthController extends Controller
{
    public function redirectToGithub()
    {
        // Redirects the user to GitHub's login screen
        return Socialite::driver('github')->stateless()->redirect();
    }

    public function handleGithubCallback()
    {
        // Grabs the user data coming back from GitHub
        $githubUser = Socialite::driver('github')->stateless()->user();

        // Finds or creates the user in your Supabase Postgres database
        $user = User::updateOrCreate(
            ['github_id' => $githubUser->id],
            [
                'name' => $githubUser->name ?? $githubUser->nickname,
                'email' => $githubUser->email,
                'avatar' => $githubUser->avatar,
            ]
        );

        $token = $user->createToken('auth_token')->plainTextToken;

        return redirect()->away(env('FRONTEND_URL', 'http://localhost:3000') . '/auth/callback?token=' . $token);
    }
}