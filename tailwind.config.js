module.exports = {
  content: [
    "./app/*/.{js,ts,jsx,tsx}",
    "./src/*/.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [], // ← REMOVE THE INVALID @shadcn/ui PLUGIN
}
