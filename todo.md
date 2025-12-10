# Victify Training Platform - Development Plan

## Design Guidelines

### Design References
- **Primary Inspiration**: Modern EdTech platforms (Coursera, Udacity)
- **Style**: Professional Corporate + Modern Tech + Clean Minimalism
- **Color Theme**: Navy Blue primary with Green accents

### Color Palette
- Primary: #0B3D91 (Navy Blue - headers, CTAs)
- Secondary: #1E3A5F (Dark Navy - sections)
- Accent: #7CB342 (Green - from logo, highlights)
- Background: #FFFFFF (White - main)
- Background Alt: #F8F9FA (Light Gray - alternating sections)
- Text Primary: #1A1A1A (Dark Gray)
- Text Secondary: #6B7280 (Medium Gray)
- Border: #E5E7EB (Light Gray)

### Typography
- Heading1: Inter font-weight 700 (48px) - Hero titles
- Heading2: Inter font-weight 600 (36px) - Section titles
- Heading3: Inter font-weight 600 (24px) - Subsection titles
- Heading4: Inter font-weight 600 (20px) - Card titles
- Body/Normal: Inter font-weight 400 (16px)
- Body/Small: Inter font-weight 400 (14px)
- Button: Inter font-weight 600 (16px)

### Key Component Styles
- **Buttons Primary**: Navy background (#0B3D91), white text, 8px rounded, hover: brighten 10%
- **Buttons Secondary**: White background, navy border, navy text, hover: navy background
- **Cards**: White background, subtle shadow, 12px rounded, border #E5E7EB
- **Forms**: White inputs with border, focus: navy accent ring
- **Navigation**: Fixed navbar, white background, shadow on scroll

### Layout & Spacing
- Hero section: Full viewport height with gradient overlay
- Section padding: 80px vertical, 24px horizontal
- Card grid: 3 columns desktop, 2 tablet, 1 mobile, 24px gaps
- Max content width: 1280px centered
- Smooth scroll behavior between sections

### Images to Generate
1. **hero-training-classroom.jpg** - Modern IT training classroom with students at computers, bright and professional (Style: photorealistic, bright lighting)
2. **service-software-dev.jpg** - Software developers collaborating on code, modern office setting (Style: photorealistic, professional)
3. **service-infrastructure.jpg** - Server room or cloud infrastructure visualization (Style: photorealistic, tech-focused)
4. **course-python.jpg** - Python programming code on screen with automation icons (Style: photorealistic, tech)
5. **course-fullstack.jpg** - Full-stack development concept with frontend and backend layers (Style: photorealistic, modern)
6. **course-git.jpg** - Git workflow visualization with branches and commits (Style: photorealistic, tech)
7. **course-cloud.jpg** - Cloud computing infrastructure with AWS/Azure icons (Style: photorealistic, professional)
8. **course-capstone.jpg** - Team working on capstone project, collaborative environment (Style: photorealistic, bright)
9. **certificate-background.jpg** - Professional certificate border design with navy and green accents (Style: minimalist, elegant)
10. **team-placeholder.jpg** - Professional business portrait placeholder (Style: photorealistic, professional)

---

## Database Schema

### Tables to Create

#### app_2a802_trainees
- id: uuid (primary key)
- user_id: uuid (references auth.users)
- full_name: text
- email: text
- phone: text
- enrolled_course: text
- enrollment_date: timestamp
- status: text (active, completed, inactive)
- created_at: timestamp

#### app_2a802_modules
- id: uuid (primary key)
- module_number: integer
- title: text
- description: text
- duration_weeks: integer
- syllabus: jsonb (array of topics)
- learning_outcomes: jsonb (array of outcomes)
- order_index: integer
- created_at: timestamp

#### app_2a802_progress
- id: uuid (primary key)
- trainee_id: uuid (references app_2a802_trainees)
- module_id: uuid (references app_2a802_modules)
- status: text (not_started, in_progress, completed)
- quiz_score: integer
- assignment_submitted: boolean
- assignment_approved: boolean
- completed_at: timestamp
- created_at: timestamp

#### app_2a802_certificates
- id: uuid (primary key)
- certificate_id: text (VCFY-YEAR-UNIQUE)
- trainee_id: uuid (references app_2a802_trainees)
- module_id: uuid (references app_2a802_modules)
- student_name: text
- course_title: text
- completion_date: date
- pdf_url: text
- verified: boolean
- created_at: timestamp

#### app_2a802_testimonials
- id: uuid (primary key)
- name: text
- role: text
- company: text
- content: text
- rating: integer
- image_url: text
- featured: boolean
- created_at: timestamp

#### app_2a802_team
- id: uuid (primary key)
- name: text
- role: text
- bio: text
- image_url: text
- order_index: integer
- created_at: timestamp

#### app_2a802_portfolio
- id: uuid (primary key)
- title: text
- description: text
- category: text
- image_url: text
- technologies: jsonb (array)
- project_url: text
- featured: boolean
- created_at: timestamp

#### app_2a802_enrollments
- id: uuid (primary key)
- full_name: text
- email: text
- phone: text
- selected_course: text
- message: text
- status: text (pending, contacted, enrolled)
- created_at: timestamp

---

## Edge Functions to Create

### app_2a802_generate_certificate
- Generate PDF certificate with student details
- Upload to Supabase storage
- Create certificate record in database
- Send email to trainee and admin
- Return certificate URL and ID

### app_2a802_send_enrollment_email
- Send confirmation email to trainee
- Send notification email to admin
- Include enrollment details

### app_2a802_verify_certificate
- Verify certificate ID exists
- Return certificate details for verification page

---

## Development Tasks

### Phase 1: Backend Setup (Supabase)
1. Install Supabase dependencies
2. Create all database tables with RLS policies
3. Create edge functions for certificate generation and email sending
4. Set up Supabase client configuration

### Phase 2: Core Components & Layout
1. Create Navigation component (fixed navbar with smooth scroll)
2. Create Footer component with social links and MSME info
3. Create reusable Card components
4. Create Button components (primary, secondary variants)
5. Create Form components (Input, Textarea, Select)

### Phase 3: Landing Page Sections
1. Hero section with logo, tagline, CTA
2. About section (MSME registered, company info)
3. Services section (3-card grid: Training, Software Dev, Infrastructure)
4. Courses section (5 modules with detailed info)
5. Portfolio section (project showcase grid)
6. Testimonials section (carousel)
7. Team section (founder, director, hiring manager, trainers)
8. Contact/Enrollment form section

### Phase 4: Training Management System
1. Course detail pages (modal or separate route)
2. Module content display
3. Quiz/Assignment submission interface
4. Progress tracking dashboard for trainees
5. Module completion workflow

### Phase 5: Certificate System
1. Certificate template design (HTML/CSS)
2. PDF generation integration
3. Certificate verification page
4. Certificate download functionality
5. Email delivery system

### Phase 6: Admin Dashboard
1. Admin authentication (login page)
2. Dashboard layout
3. Course management (CRUD operations)
4. Trainee submission approval interface
5. Certificate logs viewer
6. Content management (testimonials, team, portfolio)

### Phase 7: SEO & Performance
1. Update meta tags in index.html
2. Add OpenGraph tags
3. Add Schema.org structured data
4. Optimize images (lazy loading)
5. Ensure responsive design across all breakpoints
6. Accessibility audit (WCAG AA)

### Phase 8: Testing & Deployment
1. Cross-browser testing
2. Mobile responsiveness testing
3. Form validation testing
4. Certificate generation testing
5. Email delivery testing
6. Performance optimization (Lighthouse audit)
7. Final lint check and build

---

## File Structure

```
src/
├── components/
│   ├── ui/              (shadcn components)
│   ├── layout/
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Courses.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Team.tsx
│   │   └── Contact.tsx
│   ├── training/
│   │   ├── ModuleCard.tsx
│   │   ├── ModuleDetail.tsx
│   │   ├── QuizInterface.tsx
│   │   └── ProgressTracker.tsx
│   ├── certificate/
│   │   ├── CertificateTemplate.tsx
│   │   └── CertificateVerification.tsx
│   └── admin/
│       ├── AdminLogin.tsx
│       ├── Dashboard.tsx
│       ├── CourseManager.tsx
│       ├── SubmissionApproval.tsx
│       └── ContentManager.tsx
├── lib/
│   ├── supabase.ts
│   └── utils.ts
├── pages/
│   ├── Index.tsx
│   ├── Training.tsx
│   ├── Certificate.tsx
│   └── Admin.tsx
└── types/
    └── index.ts
```

---

## Implementation Notes

- Use Framer Motion for smooth animations and transitions
- Implement smooth scroll behavior for navigation
- Use React Query for data fetching and caching
- Implement proper error handling and loading states
- Ensure all forms have validation
- Use toast notifications for user feedback
- Implement protected routes for admin dashboard
- Store admin credentials securely in Supabase
- Use environment variables for sensitive data
- Implement proper TypeScript types throughout

---

## Certificate Template Design

The certificate will be an HTML template styled with CSS that can be converted to PDF:

- A4 size (210mm x 297mm)
- Border with navy and green accents
- Victify logo at top center
- Certificate title: "Certificate of Completion"
- Student name (large, centered)
- Course title
- Completion date
- Certificate ID (bottom left)
- MSME number (bottom right)
- Three signature blocks at bottom:
  - Prabhu Palani (Founder & CEO)
  - Sathish P (Director of Software Development)
  - Sarathi S (Hiring Manager)
- Professional typography and spacing
- Printable quality

---

## API Endpoints (Edge Functions)

1. POST /app_2a802_generate_certificate
   - Body: { traineeId, moduleId }
   - Returns: { certificateId, pdfUrl }

2. POST /app_2a802_send_enrollment_email
   - Body: { name, email, course }
   - Returns: { success: boolean }

3. GET /app_2a802_verify_certificate
   - Query: ?certificateId=VCFY-2025-0001
   - Returns: { valid: boolean, details: {...} }

---

## Deployment Checklist

- [ ] Environment variables configured
- [ ] Database tables created with proper RLS
- [ ] Edge functions deployed
- [ ] SMTP credentials configured
- [ ] Admin user created
- [ ] Sample data populated
- [ ] All images optimized
- [ ] Meta tags updated
- [ ] Build successful
- [ ] Lighthouse score > 90
- [ ] Cross-browser tested
- [ ] Mobile responsive verified
- [ ] Certificate generation tested
- [ ] Email delivery tested