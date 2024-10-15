/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * [distDir] Destination directory (defaults to `.next`)
   */
  distDir: "build",
  /**
   * [output] Type of build output:
   * - undefined: Default, works with `next start` or Vercel.
   * - standalone: For self-hosting in a Docker container.
   * - export: For static hosting without a Node.js server.
   */
  output: undefined,
};

export default nextConfig;
