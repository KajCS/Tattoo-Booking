# YoshiCat Professional Refactoring - Implementation Guide

## 📊 PROJECT STATUS

### Frontend Refactoring ✅ COMPLETE

- ✅ ArtistClients.jsx: 529 → 100 lines (5 components extracted)
- ✅ ArtistAppointments.jsx: 533 → 80 lines (3 components extracted)
- ✅ ArtistMessages.jsx: 501 → 100 lines (3 components extracted)
- ✅ ArtistEarnings.jsx: 513 → 160 lines (4 components extracted, FIXED)
- ✅ ArtistOverview.jsx: 385 → 95 lines (5 components extracted)
- ✅ ArtistPortfolio.jsx: 342 → 110 lines (3 components extracted)

**Total Components Created: 23 reusable components**
**Code Complexity Reduced by ~75-80%**

---

## 🏗️ Backend Architecture - Next Steps

### Phase 1: Domain Structure Setup (In Progress)

#### ✅ Created Directories

```
app/Domains/
├── Shared/ (Enums, Exceptions, DTOs, Resources)
├── Auth/ (Controllers, Actions, Services)
├── Users/ (Models, Controllers, Services)
├── Artists/ (Models, Controllers, Services)
├── Appointments/ (Models, Controllers, Services, Actions, Events)
├── Availability/ (Models, Controllers, Services)
├── Messaging/ (Models, Controllers, Services)
├── Portfolio/ (Models, Controllers, Services)
├── Earnings/ (Models, Controllers, Services)
├── Reviews/ (Models, Controllers)
└── Studios/ (Models, Controllers)
```

#### ✅ Created Files

- **Enums**: UserRole, AppointmentStatus, PaymentStatus
- **Models**: User, Artist, Appointment (with relationships)
- **Migrations**: users, artist_profiles, appointments tables
- **Middleware**: EnsureArtistRole, EnsureCustomerRole, EnsureAdminRole
- **Routes**: Complete API v1 route structure (api_v1.php)

#### ✅ Created Services

- axiosClient.js (Request/response interceptors)
- endpoints.js (Centralized endpoint constants)
- authService.js (Authentication service)

---

### Phase 2: Backend Implementation (NEXT STEPS)

#### 2.1 Create Remaining Models

```
App\Domains\Appointments\Models → Appointment ✅
App\Domains\Availability\Models → AvailabilitySlot, BlockedDate, Schedule
App\Domains\Messaging\Models → Conversation, Message
App\Domains\Portfolio\Models → PortfolioItem
App\Domains\Earnings\Models → Payment, Transaction, Payout
App\Domains\Studios\Models → Studio
App\Domains\Reviews\Models → Review
```

#### 2.2 Create Service Classes

Each domain needs a service to encapsulate business logic:

**Example: AppointmentService**

```php
app/Domains/Appointments/Services/AppointmentService.php
- create(array $data): Appointment
- cancel(Appointment $appointment): void
- confirmDeposit(Appointment $appointment): void
- getAvailableSlots(Artist $artist, DateTime $date): Collection
```

#### 2.3 Create Action Classes (Single Responsibility)

```
app/Domains/Appointments/Actions/
- CreateAppointmentAction.php
- UpdateAppointmentStatusAction.php
- CancelAppointmentAction.php
- ConfirmDepositAction.php

app/Domains/Availability/Actions/
- CreateAvailabilityAction.php
- BlockDateAction.php
- UnblockDateAction.php

app/Domains/Earnings/Actions/
- ProcessPaymentAction.php
- InitiatePayoutAction.php
- CalculateEarningsAction.php
```

#### 2.4 Create Controllers

```
app/Domains/Appointments/Controllers/AppointmentController.php
- index() - list appointments
- store() - create appointment
- show($id) - get single appointment
- updateStatus($id) - update status
- cancel($id) - cancel appointment

[Similar for each domain]
```

#### 2.5 Create Request Validation Classes

```
app/Domains/Appointments/Requests/
- CreateAppointmentRequest.php
- UpdateAppointmentRequest.php
- CancelAppointmentRequest.php

[Similar for each domain]
```

#### 2.6 Create API Resources

```
app/Domains/Appointments/Resources/
- AppointmentResource.php (single)
- AppointmentCollection.php (collection)

[Similar for each domain]
```

#### 2.7 Create Event & Listeners

```
app/Domains/Appointments/Events/
- AppointmentCreated.php
- AppointmentConfirmed.php
- AppointmentCancelled.php

app/Domains/Appointments/Listeners/
- SendAppointmentConfirmationEmail.php
- NotifyArtistOfNewAppointment.php
- SendReminderNotification.php
```

#### 2.8 Create Policies

```
app/Domains/Appointments/Policies/AppointmentPolicy.php
- view(User $user, Appointment $appointment): bool
- update(User $user, Appointment $appointment): bool
- cancel(User $user, Appointment $appointment): bool

[Similar for other domains]
```

---

### Phase 3: Frontend Services Integration (Next)

Create reusable service modules with hooks:

```javascript
src/services/
├── api/
│   ├── axiosClient.js ✅
│   └── endpoints.js ✅
│
├── auth/
│   └── authService.js ✅
│
├── artists/
│   ├── artistService.js (API calls)
│   └── useArtistProfile.js (hook)
│
├── appointments/
│   ├── appointmentService.js
│   ├── useAppointments.js
│   └── useAvailableSlots.js
│
├── availability/
│   ├── availabilityService.js
│   └── useAvailability.js
│
├── earnings/
│   ├── earningsService.js
│   └── useEarnings.js
│
├── messaging/
│   ├── messagingService.js
│   ├── useConversations.js
│   └── useMessages.js
│
├── portfolio/
│   ├── portfolioService.js
│   └── usePortfolio.js
│
└── reviews/
    ├── reviewService.js
    └── useReviews.js
```

---

## 📋 Recommended Order for Backend Implementation

### 1. **Core Infrastructure (Day 1-2)**

- [ ] Create remaining Models with relationships
- [ ] Create Service classes for each domain
- [ ] Set up database seeders for testing

### 2. **API Controllers & Validation (Day 3-4)**

- [ ] Create Request validation classes
- [ ] Create API Resource classes
- [ ] Create Controllers for each endpoint
- [ ] Register routes and middleware

### 3. **Business Logic & Actions (Day 5-6)**

- [ ] Implement Action classes
- [ ] Create Service methods
- [ ] Add event dispatching & listeners
- [ ] Create Policies for authorization

### 4. **Frontend Integration (Day 7-8)**

- [ ] Create service modules for each domain
- [ ] Create custom hooks (useAppointments, useEarnings, etc.)
- [ ] Integrate with existing components
- [ ] Add error handling & loading states

### 5. **Testing & Polish (Day 9-10)**

- [ ] Unit tests for services
- [ ] Feature tests for API endpoints
- [ ] Frontend integration tests
- [ ] Documentation & API spec

---

## 🔧 Example Implementation Pattern

### Backend: Appointment Service

```php
<?php

namespace App\Domains\Appointments\Services;

use App\Domains\Appointments\Models\Appointment;
use App\Domains\Appointments\Actions\CreateAppointmentAction;
use App\Domains\Appointments\Events\AppointmentCreated;
use App\Domains\Artists\Models\Artist;
use App\Domains\Users\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;

class AppointmentService
{
    public function __construct(
        private CreateAppointmentAction $createAction,
    ) {}

    /**
     * Create new appointment
     */
    public function createAppointment(
        Artist $artist,
        User $customer,
        array $data
    ): Appointment {
        $appointment = $this->createAction->execute($artist, $customer, $data);

        event(new AppointmentCreated($appointment));

        return $appointment;
    }

    /**
     * Get available slots for artist on specific date
     */
    public function getAvailableSlots(
        Artist $artist,
        Carbon $date
    ): Collection {
        // Get artist's availability for that day
        $availability = $artist->availability()
            ->where('day_of_week', $date->dayOfWeek)
            ->first();

        if (!$availability) {
            return collect();
        }

        // Get blocked dates
        $blockedDates = $artist->blockedDates()
            ->where('blocked_date', $date->toDateString())
            ->exists();

        if ($blockedDates) {
            return collect();
        }

        // Get booked appointments
        $bookedSlots = $this->getBookedSlots($artist, $date);

        // Calculate available slots
        return $this->calculateAvailableSlots(
            $availability,
            $bookedSlots,
            $date
        );
    }

    /**
     * Cancel appointment with reason
     */
    public function cancelAppointment(
        Appointment $appointment,
        string $reason = null
    ): void {
        $appointment->update([
            'status' => AppointmentStatus::CANCELLED,
            'cancellation_reason' => $reason,
            'cancelled_at' => now(),
        ]);

        event(new AppointmentCancelled($appointment));
    }

    /**
     * Confirm appointment and mark as confirmed
     */
    public function confirmAppointment(Appointment $appointment): void
    {
        $appointment->update([
            'status' => AppointmentStatus::CONFIRMED,
        ]);

        event(new AppointmentConfirmed($appointment));
    }
}
```

### Frontend: useAppointments Hook

```javascript
import { useState, useCallback, useEffect } from "react";
import appointmentService from "../services/appointments/appointmentService";

export function useAppointments(artistId = null) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch appointments
  const fetchAppointments = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await appointmentService.getAppointments(artistId);
      setAppointments(response.data);
    } catch (err) {
      setError(err.error?.message || "Failed to fetch appointments");
    } finally {
      setLoading(false);
    }
  }, [artistId]);

  // Create appointment
  const createAppointment = useCallback(async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await appointmentService.createAppointment(data);
      setAppointments((prev) => [response.data, ...prev]);
      return response;
    } catch (err) {
      setError(err.error?.message || "Failed to create appointment");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // Cancel appointment
  const cancelAppointment = useCallback(async (appointmentId, reason) => {
    setLoading(true);
    setError(null);
    try {
      await appointmentService.cancelAppointment(appointmentId, reason);
      setAppointments((prev) =>
        prev.map((apt) =>
          apt.id === appointmentId ? { ...apt, status: "cancelled" } : apt,
        ),
      );
    } catch (err) {
      setError(err.error?.message || "Failed to cancel appointment");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAppointments();
  }, [fetchAppointments]);

  return {
    appointments,
    loading,
    error,
    fetchAppointments,
    createAppointment,
    cancelAppointment,
  };
}
```

---

## 📦 Dependencies to Install

### Backend

```bash
composer require spatie/laravel-permission
composer require laravel/sanctum
composer require stripe/stripe-php
composer require --dev spatie/laravel-query-monitor
```

### Frontend

```bash
npm install zustand
npm install react-query
npm install date-fns
npm install clsx
npm install react-hot-toast
```

---

## 🚀 Quick Start Checklist

### To continue immediately:

1. **Run migrations**

   ```bash
   php artisan migrate
   ```

2. **Create initial seeds**

   ```bash
   php artisan make:seeder UserSeeder
   ```

3. **Generate API documentation**

   ```bash
   composer require --dev darkaonline/swagger-lume
   ```

4. **Set up frontend env vars**

   ```
   VITE_API_URL=http://localhost:8000/api/v1
   ```

5. **Start development servers**

   ```bash
   # Backend
   php artisan serve

   # Frontend
   npm run dev
   ```

---

## 📚 Architecture Principles Summary

### Frontend

- **Component Decomposition**: Large pages split into focused, reusable components
- **Service Layer**: All API calls centralized in services, not in components
- **Custom Hooks**: Reusable logic wrapped in React hooks
- **State Management**: Zustand for global state, local state where possible
- **Error Handling**: Consistent error patterns and user feedback

### Backend

- **Domain-Driven Design**: Organize by business domain, not technical layer
- **Single Responsibility**: Each class has one reason to change
- **Service Layer**: Business logic encapsulated in services
- **Actions**: Complex operations represented as single-purpose action classes
- **Events**: Decoupled communication between domains
- **Policies**: Centralized authorization logic
- **Type Safety**: Use enums for constants, proper type hints

### Database

- **Normalization**: Minimize data redundancy
- **Relationships**: Properly model foreign keys
- **Indexes**: Optimize common queries
- **Enums**: Use PostgreSQL enums for status fields
- **Soft Deletes**: Archive data instead of deleting
- **Audit Trail**: Track who changed what and when

---

## 🎯 Success Metrics

- ✅ All page components < 150 lines
- ✅ 100% API endpoints covered
- ✅ Zero prop drilling beyond 2 levels
- ✅ All business logic in services
- ✅ Type-safe database queries
- ✅ Role-based access control working
- ✅ Responsive and performant

---

## 📞 Next Steps

1. Review this guide with the team
2. Begin Phase 1: Create remaining models
3. Implement service classes
4. Build action/command classes
5. Create controllers
6. Connect frontend services

**Estimated Total Time: 10 business days**

Good luck! This architecture will scale beautifully as you grow. 🚀
