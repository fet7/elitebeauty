import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

/**
 * Application route graph.
 *
 * Structure:
 * - Public layout: marketing pages + booking
 * - Admin layout: internal staff dashboard (future)
 *
 * This file is the single source of truth for routing.
 */
export default [
  /**
   * Public-facing routes
   */
  layout("routes/public/layout.tsx", [
    index("routes/public/home.tsx"),
    route("services", "routes/public/services.tsx"),
    route("booking", "routes/public/booking.tsx"),
    route("team", "routes/public/team.tsx"),
    route("gallery", "routes/public/gallery.tsx"),
    route("contact", "routes/public/contact.tsx"),
    route('chatbot', 'routes/public/chatbot.ts'),
  ]),

  /**
   * Admin authentication routes (future)
   * Kept separate from admin layout intentionally.
   */
//   route("admin/signin", "routes/admin/signin.tsx"),
//   route("admin/signout", "routes/admin/signout.tsx"),

  /**
   * Admin dashboard routes (future)
   */
//   layout("routes/admin/layout.tsx", [
//     index("routes/admin/dashboard.tsx"),
//     route("appointments", "routes/admin/appointments/index.tsx"),
//     route(
//       "appointments/:id",
//       "routes/admin/appointments/$id.tsx"
//     ),
//     route("staff", "routes/admin/staff/index.tsx"),
//     route("services", "routes/admin/services/index.tsx"),
//     route("settings", "routes/admin/settings.tsx"),
//   ]),
] satisfies RouteConfig;
