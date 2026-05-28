# YoshiCat Platform - Professional Architecture Guide

## FRONTEND REFACTORING SUMMARY ✅

### Completed Component Extractions

**ArtistClients.jsx** (529 → ~100 lines)

- ✅ ClientStatsCards
- ✅ ClientListSection
- ✅ ClientDetailPanel

**ArtistAppointments.jsx** (533 → ~80 lines)

- ✅ AppointmentFiltersSection
- ✅ AppointmentTable
- ✅ AppointmentDetailModal

**ArtistMessages.jsx** (501 → ~100 lines)

- ✅ ConversationList
- ✅ ChatWindow
- ✅ MessageInputSection

**ArtistEarnings.jsx** (513 → ~160 lines, FIXED)

- ✅ EarningsStatsCards
- ✅ RevenueCharts
- ✅ WeeklyChart
- ✅ TransactionTable

**ArtistOverview.jsx** (385 → ~95 lines)

- ✅ TodayAppointmentsList
- ✅ PendingRequestsList
- ✅ QuickStatsCard
- ✅ WeeklyCalendarPreview
- ✅ ActivityFeed

**ArtistPortfolio.jsx** (342 → ~110 lines)

- ✅ PortfolioStatsCards
- ✅ PortfolioControls
- ✅ PortfolioGrid

---

## BACKEND ARCHITECTURE - DOMAIN-DRIVEN DESIGN

### Directory Structure

```
app/
├── Domains/
│   ├── Shared/
│   │   ├── DTOs/
│   │   ├── Enums/
│   │   ├── Exceptions/
│   │   └── Resources/
│   │
│   ├── Auth/
│   │   ├── Controllers/
│   │   ├── Actions/
│   │   ├── Services/
│   │   ├── Requests/
│   │   ├── Resources/
│   │   └── Routes/
│   │
│   ├── Users/
│   │   ├── Models/User.php
│   │   ├── Controllers/UserController.php
│   │   ├── Services/UserService.php
│   │   ├── Actions/CreateUserAction.php
│   │   ├── Requests/CreateUserRequest.php
│   │   ├── Resources/UserResource.php
│   │   └── Policies/UserPolicy.php
│   │
│   ├── Artists/
│   │   ├── Models/
│   │   │   ├── Artist.php
│   │   │   └── ArtistProfile.php
│   │   ├── Controllers/
│   │   │   ├── ArtistController.php
│   │   │   └── ArtistProfileController.php
│   │   ├── Services/
│   │   │   └── ArtistService.php
│   │   ├── Actions/
│   │   │   ├── CreateArtistAction.php
│   │   │   └── UpdateArtistProfileAction.php
│   │   ├── Requests/
│   │   ├── Resources/
│   │   ├── Policies/
│   │   └── Routes/
│   │
│   ├── Appointments/
│   │   ├── Models/Appointment.php
│   │   ├── Controllers/AppointmentController.php
│   │   ├── Services/AppointmentService.php
│   │   ├── Actions/
│   │   │   ├── CreateAppointmentAction.php
│   │   │   ├── UpdateAppointmentStatusAction.php
│   │   │   └── CancelAppointmentAction.php
│   │   ├── Requests/
│   │   ├── Resources/
│   │   ├── Policies/AppointmentPolicy.php
│   │   ├── Events/
│   │   │   ├── AppointmentCreated.php
│   │   │   ├── AppointmentConfirmed.php
│   │   │   └── AppointmentCancelled.php
│   │   ├── Listeners/
│   │   └── Routes/
│   │
│   ├── Availability/
│   │   ├── Models/
│   │   │   ├── AvailabilitySlot.php
│   │   │   ├── BlockedDate.php
│   │   │   └── Schedule.php
│   │   ├── Controllers/AvailabilityController.php
│   │   ├── Services/AvailabilityService.php
│   │   ├── Actions/
│   │   │   ├── CreateAvailabilityAction.php
│   │   │   ├── BlockDateAction.php
│   │   │   └── UnblockDateAction.php
│   │   ├── Requests/
│   │   ├── Resources/
│   │   ├── Policies/AvailabilityPolicy.php
│   │   └── Routes/
│   │
│   ├── Messaging/
│   │   ├── Models/
│   │   │   ├── Conversation.php
│   │   │   └── Message.php
│   │   ├── Controllers/
│   │   │   ├── ConversationController.php
│   │   │   └── MessageController.php
│   │   ├── Services/
│   │   │   ├── MessagingService.php
│   │   │   └── NotificationService.php
│   │   ├── Actions/
│   │   │   ├── SendMessageAction.php
│   │   │   └── CreateConversationAction.php
│   │   ├── Requests/
│   │   ├── Resources/
│   │   ├── Policies/
│   │   ├── Events/MessageSent.php
│   │   └── Routes/
│   │
│   ├── Portfolio/
│   │   ├── Models/
│   │   │   └── PortfolioItem.php
│   │   ├── Controllers/PortfolioController.php
│   │   ├── Services/PortfolioService.php
│   │   ├── Actions/
│   │   │   ├── UploadPortfolioItemAction.php
│   │   │   └── FeaturePortfolioItemAction.php
│   │   ├── Requests/
│   │   ├── Resources/
│   │   ├── Policies/PortfolioPolicy.php
│   │   └── Routes/
│   │
│   ├── Earnings/
│   │   ├── Models/
│   │   │   ├── Payment.php
│   │   │   ├── Transaction.php
│   │   │   └── Payout.php
│   │   ├── Controllers/EarningsController.php
│   │   ├── Services/
│   │   │   ├── EarningsService.php
│   │   │   ├── PaymentService.php
│   │   │   └── PayoutService.php
│   │   ├── Actions/
│   │   │   ├── ProcessPaymentAction.php
│   │   │   ├── InitiatePayoutAction.php
│   │   │   └── CalculateEarningsAction.php
│   │   ├── Requests/
│   │   ├── Resources/
│   │   ├── Policies/
│   │   ├── Events/
│   │   └── Routes/
│   │
│   ├── Reviews/
│   │   ├── Models/Review.php
│   │   ├── Controllers/ReviewController.php
│   │   ├── Services/ReviewService.php
│   │   ├── Actions/
│   │   ├── Requests/
│   │   ├── Resources/
│   │   ├── Policies/ReviewPolicy.php
│   │   └── Routes/
│   │
│   └── Studios/
│       ├── Models/Studio.php
│       ├── Controllers/StudioController.php
│       ├── Services/StudioService.php
│       ├── Actions/
│       ├── Requests/
│       ├── Resources/
│       ├── Policies/StudioPolicy.php
│       └── Routes/
│
├── Http/
│   ├── Middleware/
│   │   ├── EnsureArtistRole.php
│   │   ├── EnsureCustomerRole.php
│   │   ├── EnsureAdminRole.php
│   │   ├── ValidateApiVersion.php
│   │   └── TrackApiUsage.php
│   └── Controllers/ (legacy - moved to Domains)
│
└── Exceptions/
    ├── AppointmentNotFoundException.php
    ├── AvailabilityConflictException.php
    ├── InsufficientBalanceException.php
    └── UnauthorizedArtistException.php
```

### Database Schema (PostgreSQL)

#### Core Tables

```sql
-- Users (all roles)
CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  email_verified_at TIMESTAMP NULL,
  phone VARCHAR(20) NULL,
  password_hash VARCHAR(255),
  role ENUM('customer', 'artist', 'admin') NOT NULL DEFAULT 'customer',

  -- OAuth
  google_id VARCHAR(255) NULL UNIQUE,
  google_token TEXT NULL,
  oauth_refresh_token TEXT NULL,

  -- Profile
  avatar_url TEXT NULL,
  bio TEXT NULL,

  -- System
  is_active BOOLEAN DEFAULT true,
  last_seen_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  INDEX idx_email,
  INDEX idx_role,
  INDEX idx_google_id
);

-- Artist Profiles (only for users with artist role)
CREATE TABLE artist_profiles (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL UNIQUE,

  -- Professional Info
  bio TEXT,
  specialties TEXT[] DEFAULT '{}',
  experience_years INT,
  hourly_rate DECIMAL(8,2),

  -- Stats
  total_appointments INT DEFAULT 0,
  total_revenue DECIMAL(12,2) DEFAULT 0,
  average_rating DECIMAL(3,2) DEFAULT 0,
  total_reviews INT DEFAULT 0,

  -- Verification
  is_verified BOOLEAN DEFAULT false,
  verification_documents_url TEXT[] DEFAULT '{}',

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_id,
  INDEX idx_verified
);

-- Studios (artists can work at studios)
CREATE TABLE studios (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address TEXT NOT NULL,
  city VARCHAR(100),
  state VARCHAR(100),
  zip_code VARCHAR(20),
  country VARCHAR(100),

  phone VARCHAR(20),
  website VARCHAR(255),
  hours_of_operation JSONB, -- {"monday": {"open": "10:00", "close": "22:00"}, ...}

  -- Capacity & Rooms
  total_rooms INT DEFAULT 1,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  INDEX idx_city,
  INDEX idx_state
);

-- Artist-Studio Relationship
CREATE TABLE artist_studio_assignments (
  id BIGSERIAL PRIMARY KEY,
  artist_id BIGINT NOT NULL,
  studio_id BIGINT NOT NULL,
  room_number INT,

  is_primary BOOLEAN DEFAULT false,
  assigned_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (artist_id) REFERENCES artist_profiles(user_id),
  FOREIGN KEY (studio_id) REFERENCES studios(id) ON DELETE CASCADE,
  UNIQUE(artist_id, studio_id),
  INDEX idx_artist_id,
  INDEX idx_studio_id
);

-- Availability Slots (recurring weekly schedule)
CREATE TABLE availability_slots (
  id BIGSERIAL PRIMARY KEY,
  artist_id BIGINT NOT NULL,

  day_of_week SMALLINT NOT NULL CHECK (day_of_week BETWEEN 0 AND 6), -- 0=Sun, ..., 6=Sat
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  slot_duration_minutes INT DEFAULT 60,

  is_active BOOLEAN DEFAULT true,

  FOREIGN KEY (artist_id) REFERENCES artist_profiles(user_id) ON DELETE CASCADE,
  INDEX idx_artist_id,
  UNIQUE(artist_id, day_of_week, start_time)
);

-- Blocked Dates (calendar blocks, days off, etc.)
CREATE TABLE blocked_dates (
  id BIGSERIAL PRIMARY KEY,
  artist_id BIGINT NOT NULL,

  blocked_date DATE NOT NULL,
  reason VARCHAR(255), -- 'day_off', 'personal', 'emergency', 'maintenance'
  is_recurring BOOLEAN DEFAULT false, -- yearly, monthly

  created_by BIGINT NOT NULL, -- artist or admin
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (artist_id) REFERENCES artist_profiles(user_id) ON DELETE CASCADE,
  FOREIGN KEY (created_by) REFERENCES users(id),
  INDEX idx_artist_id,
  INDEX idx_blocked_date
);

-- Appointments
CREATE TABLE appointments (
  id BIGSERIAL PRIMARY KEY,
  artist_id BIGINT NOT NULL,
  customer_id BIGINT NOT NULL,

  -- Details
  tattoo_description TEXT,
  tattoo_style VARCHAR(100),
  tattoo_size VARCHAR(50), -- "small", "medium", "large", "half_sleeve", "full_sleeve", ...
  reference_images_urls TEXT[] DEFAULT '{}',
  placement_area VARCHAR(100),

  -- Scheduling
  appointment_date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  duration_minutes INT DEFAULT 120,

  -- Pricing
  estimated_price DECIMAL(8,2),
  deposit_required DECIMAL(8,2),
  deposit_paid DECIMAL(8,2) DEFAULT 0,

  -- Status
  status ENUM('inquired', 'quoted', 'deposit_pending', 'confirmed',
              'in_progress', 'completed', 'cancelled') DEFAULT 'inquired',
  cancellation_reason TEXT NULL,
  cancelled_at TIMESTAMP NULL,

  -- Metadata
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (artist_id) REFERENCES artist_profiles(user_id),
  FOREIGN KEY (customer_id) REFERENCES users(id),
  INDEX idx_artist_id,
  INDEX idx_customer_id,
  INDEX idx_appointment_date,
  INDEX idx_status
);

-- Portfolio Items
CREATE TABLE portfolio_items (
  id BIGSERIAL PRIMARY KEY,
  artist_id BIGINT NOT NULL,

  title VARCHAR(255) NOT NULL,
  description TEXT,
  style VARCHAR(100), -- "Japanese", "Fine Line", "Blackwork", ...

  image_url TEXT NOT NULL,
  thumbnail_url TEXT,

  -- Stats
  likes INT DEFAULT 0,
  views INT DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,

  -- Metadata
  sort_order INT,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (artist_id) REFERENCES artist_profiles(user_id) ON DELETE CASCADE,
  INDEX idx_artist_id,
  INDEX idx_featured
);

-- Conversations
CREATE TABLE conversations (
  id BIGSERIAL PRIMARY KEY,
  artist_id BIGINT NOT NULL,
  customer_id BIGINT NOT NULL,

  subject VARCHAR(255),
  last_message_at TIMESTAMP NULL,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (artist_id) REFERENCES artist_profiles(user_id),
  FOREIGN KEY (customer_id) REFERENCES users(id),
  UNIQUE(artist_id, customer_id),
  INDEX idx_artist_id,
  INDEX idx_customer_id
);

-- Messages
CREATE TABLE messages (
  id BIGSERIAL PRIMARY KEY,
  conversation_id BIGINT NOT NULL,
  sender_id BIGINT NOT NULL,

  body TEXT NOT NULL,
  attachment_urls TEXT[] DEFAULT '{}',

  is_read BOOLEAN DEFAULT false,
  read_at TIMESTAMP NULL,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (conversation_id) REFERENCES conversations(id) ON DELETE CASCADE,
  FOREIGN KEY (sender_id) REFERENCES users(id),
  INDEX idx_conversation_id,
  INDEX idx_sender_id,
  INDEX idx_created_at
);

-- Payments (for deposits and full payments)
CREATE TABLE payments (
  id BIGSERIAL PRIMARY KEY,
  appointment_id BIGINT NOT NULL,
  customer_id BIGINT NOT NULL,
  artist_id BIGINT NOT NULL,

  payment_type ENUM('deposit', 'full_payment', 'balance') DEFAULT 'full_payment',
  amount DECIMAL(10,2) NOT NULL,

  payment_method VARCHAR(50), -- 'stripe', 'paypal', 'bank_transfer'
  transaction_id VARCHAR(255),

  status ENUM('pending', 'processing', 'succeeded', 'failed', 'refunded') DEFAULT 'pending',

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (appointment_id) REFERENCES appointments(id),
  FOREIGN KEY (customer_id) REFERENCES users(id),
  FOREIGN KEY (artist_id) REFERENCES artist_profiles(user_id),
  INDEX idx_appointment_id,
  INDEX idx_customer_id,
  INDEX idx_status
);

-- Reviews
CREATE TABLE reviews (
  id BIGSERIAL PRIMARY KEY,
  appointment_id BIGINT NOT NULL UNIQUE,
  artist_id BIGINT NOT NULL,
  customer_id BIGINT NOT NULL,

  rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  title VARCHAR(255),
  content TEXT,

  -- Aspect Ratings
  design_quality SMALLINT CHECK (design_quality BETWEEN 1 AND 5),
  communication SMALLINT CHECK (communication BETWEEN 1 AND 5),
  professionalism SMALLINT CHECK (professionalism BETWEEN 1 AND 5),
  cleanliness SMALLINT CHECK (cleanliness BETWEEN 1 AND 5),
  value_for_money SMALLINT CHECK (value_for_money BETWEEN 1 AND 5),

  helpful_count INT DEFAULT 0,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (appointment_id) REFERENCES appointments(id) ON DELETE CASCADE,
  FOREIGN KEY (artist_id) REFERENCES artist_profiles(user_id),
  FOREIGN KEY (customer_id) REFERENCES users(id),
  INDEX idx_artist_id,
  INDEX idx_rating
);

-- Notifications
CREATE TABLE notifications (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL,

  type VARCHAR(100), -- 'appointment_confirmed', 'message_received', 'payment_received', ...
  title VARCHAR(255),
  message TEXT,
  data JSONB NULL,

  is_read BOOLEAN DEFAULT false,
  read_at TIMESTAMP NULL,

  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_user_id,
  INDEX idx_is_read,
  INDEX idx_created_at
);
```

---

## API Contract (RESTful)

### Auth Endpoints

```
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/auth/oauth/google
POST   /api/v1/auth/logout
POST   /api/v1/auth/refresh
GET    /api/v1/auth/me
```

### Artist Endpoints

```
GET    /api/v1/artists
GET    /api/v1/artists/:id
POST   /api/v1/artists (create)
PUT    /api/v1/artists/:id (update profile)
GET    /api/v1/artists/:id/availability
GET    /api/v1/artists/:id/appointments
GET    /api/v1/artists/:id/earnings
GET    /api/v1/artists/:id/reviews
```

### Appointment Endpoints

```
GET    /api/v1/appointments
POST   /api/v1/appointments (create)
GET    /api/v1/appointments/:id
PATCH  /api/v1/appointments/:id/status
PATCH  /api/v1/appointments/:id/cancel
GET    /api/v1/appointments/:id/available-slots
```

### Availability Endpoints

```
GET    /api/v1/availability/:artist_id
POST   /api/v1/availability (create slot)
PUT    /api/v1/availability/:slot_id
DELETE /api/v1/availability/:slot_id
POST   /api/v1/availability/block (block date)
DELETE /api/v1/availability/block/:id
```

### Messaging Endpoints

```
GET    /api/v1/conversations
POST   /api/v1/conversations
GET    /api/v1/conversations/:id/messages
POST   /api/v1/messages
GET    /api/v1/messages/:id
```

### Portfolio Endpoints

```
GET    /api/v1/portfolio
POST   /api/v1/portfolio (upload)
PUT    /api/v1/portfolio/:id
DELETE /api/v1/portfolio/:id
PATCH  /api/v1/portfolio/:id/feature
```

### Earnings Endpoints

```
GET    /api/v1/earnings/summary
GET    /api/v1/earnings/transactions
GET    /api/v1/earnings/analytics?period=month
GET    /api/v1/earnings/payouts
POST   /api/v1/earnings/payout-request
```

---

## Frontend Services & Hooks (to be created)

### Services Layer

```
src/
└── services/
    ├── api/
    │   ├── axiosClient.js       # Axios instance with interceptors
    │   └── endpoints.js         # API endpoint constants
    │
    ├── artists/
    │   ├── useArtistProfile.js
    │   ├── useArtistStats.js
    │   └── artistService.js
    │
    ├── appointments/
    │   ├── useAppointments.js
    │   ├── useAvailableSlots.js
    │   └── appointmentService.js
    │
    ├── availability/
    │   ├── useAvailability.js
    │   └── availabilityService.js
    │
    ├── earnings/
    │   ├── useEarnings.js
    │   └── earningsService.js
    │
    ├── messaging/
    │   ├── useConversations.js
    │   ├── useMessages.js
    │   └── messagingService.js
    │
    ├── portfolio/
    │   ├── usePortfolio.js
    │   └── portfolioService.js
    │
    └── auth/
        ├── useAuth.js
        └── authService.js
```

---

## Response DTOs & Error Handling

### Response Envelope Pattern

```json
{
  "success": true,
  "data": { ... },
  "meta": {
    "page": 1,
    "per_page": 20,
    "total": 100,
    "last_page": 5
  },
  "timestamp": "2026-05-28T12:00:00Z"
}
```

### Error Response

```json
{
  "success": false,
  "error": {
    "code": "APPOINTMENT_NOT_FOUND",
    "message": "The requested appointment does not exist",
    "details": { ... }
  },
  "timestamp": "2026-05-28T12:00:00Z"
}
```

---

## Next Steps

1. **Create Laravel domain structure** with migrations
2. **Implement authentication** with role-based access
3. **Build API endpoints** following the contract
4. **Create frontend service layer** with hooks
5. **Integrate state management** (Zustand)
6. **Set up API documentation** (OpenAPI/Swagger)
