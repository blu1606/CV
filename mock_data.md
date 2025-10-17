-- ============================================
-- SEED DATA FOR DEVELOPMENT & TESTING
-- ============================================

-- Note: Replace USER_ID with your actual user ID from auth.users
-- Get your user ID by running: SELECT id FROM auth.users WHERE email = 'your@email.com';

-- Variables (set these first)
DO $$
DECLARE
  dev_user_id UUID := 'c8190249-07bf-4a35-a58f-801f05f9f2e2'; -- Replace with actual user ID
BEGIN

-- ============================================
-- 1. SEED COMPONENTS - Work Experience
-- ============================================
INSERT INTO public.components (user_id, account_id, type, title, organization, start_date, end_date, description, highlights)
VALUES
  (dev_user_id, NULL, 'experience', 'Senior Frontend Developer', 'Tech Corp', '2022-01-01', '2024-12-31', 
   'Led frontend development team to build scalable React applications',
   '["Increased performance by 40%", "Mentored 5 junior developers", "Implemented CI/CD pipeline"]'::jsonb),
   
  (dev_user_id, NULL, 'experience', 'Full Stack Developer', 'StartupXYZ', '2020-06-01', '2021-12-31',
   'Built and maintained full-stack web applications using MERN stack',
   '["Shipped 3 major features", "Reduced API response time by 60%", "Implemented OAuth authentication"]'::jsonb),
   
  (dev_user_id, NULL, 'experience', 'Junior Developer', 'Digital Agency', '2019-01-01', '2020-05-31',
   'Developed responsive websites and mobile-first applications',
   '["Completed 20+ client projects", "Learned React and TypeScript", "Collaborated with design team"]'::jsonb);

-- ============================================
-- 2. SEED COMPONENTS - Education
-- ============================================
INSERT INTO public.components (user_id, account_id, type, title, organization, start_date, end_date, description, highlights)
VALUES
  (dev_user_id, NULL, 'education', 'Bachelor of Computer Science', 'University of Technology', '2015-09-01', '2019-06-30',
   'Major in Software Engineering, GPA: 3.8/4.0',
   '["Dean''s List 2017-2019", "Graduated with Honors", "Capstone: AI-powered CV Builder"]'::jsonb),
   
  (dev_user_id, NULL, 'education', 'Full Stack Web Development Bootcamp', 'Code Academy', '2018-06-01', '2018-12-31',
   'Intensive 6-month bootcamp covering modern web technologies',
   '["Built 10+ portfolio projects", "Learned React, Node.js, MongoDB", "Final project: E-commerce platform"]'::jsonb);

-- ============================================
-- 3. SEED COMPONENTS - Skills
-- ============================================
INSERT INTO public.components (user_id, account_id, type, title, organization, description, highlights)
VALUES
  (dev_user_id, NULL, 'skill', 'React & Next.js', NULL, 'Expert-level proficiency in modern React ecosystem',
   '["5+ years experience", "Built 50+ production apps", "TypeScript expert"]'::jsonb),
   
  (dev_user_id, NULL, 'skill', 'Node.js & Express', NULL, 'Backend API development and microservices',
   '["RESTful API design", "GraphQL", "Database optimization"]'::jsonb),
   
  (dev_user_id, NULL, 'skill', 'Database Management', NULL, 'PostgreSQL, MongoDB, Redis',
   '["Query optimization", "Schema design", "Performance tuning"]'::jsonb),
   
  (dev_user_id, NULL, 'skill', 'DevOps & Cloud', NULL, 'AWS, Docker, CI/CD pipelines',
   '["Docker containerization", "GitHub Actions", "Vercel deployment"]'::jsonb),
   
  (dev_user_id, NULL, 'skill', 'UI/UX Design', NULL, 'Figma, responsive design, accessibility',
   '["WCAG compliance", "Mobile-first design", "Design systems"]'::jsonb);

-- ============================================
-- 4. SEED COMPONENTS - Projects
-- ============================================
INSERT INTO public.components (user_id, account_id, type, title, organization, start_date, end_date, description, highlights)
VALUES
  (dev_user_id, NULL, 'project', 'AI-Powered CV Builder', 'Personal Project', '2024-01-01', '2024-12-31',
   'Full-stack application that generates tailored CVs using AI and LinkedIn data',
   '["Next.js 15 + TypeScript", "Supabase + PostgreSQL", "OpenAI integration", "1000+ users"]'::jsonb),
   
  (dev_user_id, NULL, 'project', 'E-commerce Platform', 'Freelance', '2023-06-01', '2023-12-31',
   'Complete online shopping platform with payment integration',
   '["Stripe integration", "Real-time inventory", "Admin dashboard", "$100K+ revenue"]'::jsonb),
   
  (dev_user_id, NULL, 'project', 'Task Management SaaS', 'Side Project', '2022-03-01', '2022-11-30',
   'Team collaboration tool with real-time updates',
   '["WebSocket for real-time", "Team permissions", "Calendar integration", "500+ active teams"]'::jsonb);

-- ============================================
-- 5. SEED CVs - Example Generated CVs
-- ============================================
INSERT INTO public.cvs (user_id, title, job_description, match_score, content)
VALUES
  (dev_user_id, 'CV for Senior Full Stack Developer', 
   'We are looking for a Senior Full Stack Developer with expertise in React, Node.js, and cloud technologies...',
   92.5,
   '{
     "sections": [
       {
         "section_title": "Work Experience",
         "component_ids": []
       },
       {
         "section_title": "Technical Skills",
         "component_ids": []
       },
       {
         "section_title": "Projects",
         "component_ids": []
       }
     ]
   }'::jsonb),
   
  (dev_user_id, 'CV for Frontend React Developer',
   'Seeking a Frontend Developer specializing in React and modern JavaScript...',
   88.0,
   '{
     "sections": [
       {
         "section_title": "Work Experience",
         "component_ids": []
       },
       {
         "section_title": "Skills",
         "component_ids": []
       }
     ]
   }'::jsonb);

-- ============================================
-- 6. UPDATE PROFILE WITH MORE INFO
-- ============================================
UPDATE public.profiles
SET 
  profession = 'Senior Full Stack Developer',
  full_name = COALESCE(full_name, 'John Doe'),
  avatar_url = COALESCE(avatar_url, 'https://api.dicebear.com/7.x/avataaars/svg?seed=John')
WHERE id = dev_user_id;

END $$;

-- ============================================
-- VERIFICATION QUERIES
-- ============================================

-- Check components count
SELECT 
  type,
  COUNT(*) as count
FROM public.components
GROUP BY type
ORDER BY type;

-- Check CVs
SELECT 
  title,
  match_score,
  created_at
FROM public.cvs
ORDER BY created_at DESC;

-- Check profile
SELECT 
  full_name,
  profession,
  avatar_url
FROM public.profiles
LIMIT 1;
