// src/components/BackgroundFeatures.tsx

export default function BackgroundFeatures() {
  return (
    // Container ini menempel di layar dan berada di belakang konten
    <div
      className="fixed top-0 left-0 w-full h-screen -z-10"
      aria-hidden="true"
    >
      {/* Bola Cahaya 1 (Ungu) */}
      <div className="absolute top-0 -left-40 w-[30rem] h-[30rem] bg-purple-600/20 rounded-full filter blur-3xl opacity-50"></div>

      {/* Bola Cahaya 2 (Oranye/Kuning) */}
      <div className="absolute bottom-0 -right-40 w-[30rem] h-[30rem] bg-yellow-400/10 rounded-full filter blur-3xl opacity-50"></div>
    </div>
  );
}
