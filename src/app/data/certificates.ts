// src/data/certificates.ts

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image: string;
  category: string;
  credentialUrl?: string; // Properti baru untuk link, bersifat opsional
};

// Daftar kategori untuk tombol tab
export const certificateCategories = ["All", "Course", "Milestone", "Test/Competition", "Organization", "Seminar/Training"];

export const allCertificates: Certificate[] = [
  // Kategori: Course
  { title: "Belajar Dasar Pemrograman Web", issuer: "Dicoding", date: "May 16, 2024", image: "/images/belajardasarpemrogramanweb.jpg", category: "Course", credentialUrl: "https://www.dicoding.com/certificates/0LZ06QGNRZ65" },
  { title: "Pengenalan ke Logika Pemrograman", issuer: "Dicoding", date: "Sep 12, 2024", image: "/images/pengenalankelogikapemrograman.webp", category: "Course", credentialUrl: "https://www.dicoding.com/certificates/2VX3RD1D3ZYQ" },
  { title: "Belajar Dasar Git dengan GitHub", issuer: "Dicoding", date: "Sep 15, 2024", image: "/images/belajardasargitdengangithub.webp", category: "Course", credentialUrl: "https://www.dicoding.com/certificates/EYX4VWQLOZDL" },
  { title: "Memulai Pemrograman dengan Kotlin", issuer: "Dicoding", date: "Sep 23, 2024", image: "/images/memulaipemrogramandengankotlin.webp", category: "Course", credentialUrl: "https://www.dicoding.com/certificates/KEXLYED2WZG2" },
  { title: "Belajar Membuat Aplikasi Android untuk Pemula", issuer: "Dicoding", date: "Oct 4, 2024", image: "/images/belajarmembuataplikasiandroiduntukpemula.webp", category: "Course", credentialUrl: "https://www.dicoding.com/certificates/1RXY2O04KXVM" },
  { title: "Belajar Fundamental Aplikasi Android", issuer: "Dicoding", date: "Oct 19, 2024", image: "/images/belajarfundamentalaplikasiandroid.webp", category: "Course", credentialUrl: "https://www.dicoding.com/certificates/98XW52N7WPM3" },
  { title: "Belajar Dasar AI", issuer: "Dicoding", date: "Oct 19, 2024", image: "/images/belajardasarai.webp", category: "Course", credentialUrl: "https://www.dicoding.com/certificates/1RXY21GRMXVM" },
  { title: "Belajar Penerapan Machine Learning untuk Android", issuer: "Dicoding", date: "Oct 31, 2024", image: "/images/belajarpenerapanamachinelearning.webp", category: "Course", credentialUrl: "https://www.dicoding.com/certificates/1OP842488ZQK" },
  { title: "Belajar Pengembangan Aplikasi Android Intermediate", issuer: "Dicoding", date: "Nov 18, 2024", image: "/images/belajarpengembanganaplikasiandroidintermediate.webp", category: "Course", credentialUrl: "https://www.dicoding.com/certificates/07Z64DDVYPQR" },
  { title: "Memulai Pemrograman dengan Dart", issuer: "Dicoding", date: "Jan 19, 2025", image: "/images/memulaipemrogramandengandart.webp", category: "Course", credentialUrl: "https://www.dicoding.com/certificates/98XWER41LXM3" },
  { title: "Belajar Membuat Aplikasi Flutter untuk Pemula", issuer: "Dicoding", date: "Jan 30, 2025", image: "/images/belajarmembuataplikasiflutteruntukpemula.webp", category: "Course", credentialUrl: "https://www.dicoding.com/certificates/98XWE4O94XM3" },
  { title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software", issuer: "Dicoding", date: "Sep 11, 2024", image: "/images/memulaidasarpemrogramanuntukmenjadipengembangsoftware.webp", category: "Course", credentialUrl: "https://www.dicoding.com/certificates/QLZ975MV7P5D" },

  // Kategori: Milestone
  { title: "Peserta MSIB Kampus Merdeka", issuer: "MSIB", date: "Jan 9, 2025", image: "/images/sertifkatmsib.webp", category: "Milestone", credentialUrl: "https://drive.google.com/file/d/1Rgao0iTrK5ETM_lk_S4p5MODsuYoLMr7/view?usp=sharing" },
  { title: "Bangkit Academy 2024 - Mobile Development", issuer: "Bangkit", date: "Jan 10, 2025", image: "/images/sertifkatbangkit.webp", category: "Milestone", credentialUrl: "https://drive.google.com/file/d/1JALqqTH8Oci2WxN8qgHhmlhNfVJ7XSpt/view?usp=drive_link" },
  { title: "Professional Certificate in IT", issuer: "CEP CCIT FTUI", date: "Nov 4, 2023", image: "/images/Sertifikat Professional IT CEP-CCIT FTUI.webp", category: "Milestone", credentialUrl: "https://drive.google.com/file/d/1oQ36toi4at7-rnyzuiLnyBsX-tmiJqAF/view?usp=sharing" },
  { title: "DNIIT (Software Engineering)", issuer: "NIIT", date: "Feb 29, 2024", image: "/images/Sertifikat NIIT.webp", category: "Milestone", credentialUrl: "https://drive.google.com/file/d/16X9ef1vqROSCd4WhYkAGY3yRTRHpykyQ/view?usp=sharing" },
  { title: "Pillbox.id - PBL Internship Completion", issuer: "Pillbox.id", date: "Jun 17, 2025", image: "/images/pillbox2.png", category: "Milestone", credentialUrl: "https://drive.google.com/file/d/1yOw5X3hu4aGkBDqE7x4k1SpbXeabRmX0/view?usp=sharing" },

  // Kategori: Competition
  { title: "ETS - TOEIC", issuer: "ETS", date: "Jan 14, 2024", image: "/images/Sertifikat Hasil TOEIC.webp", category: "Test/Competition", credentialUrl: "https://drive.google.com/file/d/112_WtbNEJgim9K4-945Fhx84FbgdoZLl/view?usp=sharing" },
  { title: "TOEFL Prediction", issuer: "TOEPS", date: "Oct 8, 2023", image: "/images/Sertifikat Hasil TOEFL.webp", category: "Test/Competition", credentialUrl: "https://drive.google.com/file/d/1hhyAYUo5wNnTISnJP8ADOcMJR8GVaXQC/view?usp=sharing" },
  { title: "ITECHNO CUP Web Design", issuer: "HIMATIK PNJ", date: "Aug 9, 2024", image: "/images/itechno.png", category: "Test/Competition", credentialUrl: "https://drive.google.com/file/d/1kqpEA7HmT9TaLDKYk90oVJiLIPMrkyqc/view?usp=drive_link" },
  { title: "Dev Certified for Android (DCA)", issuer: "dev.cert", date: "Jun 2, 2025", image: "/images/sertifikatdevcert1.png", category: "Test/Competition", credentialUrl: "https://dev.id/certificate/verify/ZEV6MQ6WYL" },
  
  // Kategori: Organization
  { title: "Ketua Divisi Kreatif", issuer: "EXPECTIK 2024", date: "Nov 24, 2024", image: "/images/sertifikatexpectik2024.webp", category: "Organization", credentialUrl: "https://drive.google.com/file/d/1eb-1_sukjtnXaYLHtGhT4CTEZiVMfX1-/view?usp=sharing" },
  { title: "Staff Divisi Mentor", issuer: "EXPECTIK 2023", date: "Feb 14, 2024", image: "/images/Sertifikat Mentor EXPECTIK 2023.webp", category: "Organization", credentialUrl: "https://drive.google.com/file/d/1MRKcvPeS-8Hcs7VRQq_ryfZOTL3I6tFE/view?usp=sharing" },
  { title: "Staff of Arts Division", issuer: "BEM PNJ 2024", date: "Nov 15, 2024", image: "/images/sertifikatop.webp", category: "Organization", credentialUrl: "https://drive.google.com/file/d/1FIPzwfLE0dIu0XWsp-_H6elbprMydW4x/view?usp=sharing" },

  // Kategori: Seminar/Training
  { title: "Digitalent Metaverse", issuer: "KOMINFO", date: "May 25, 2023", image: "/images/kominfo.webp", category: "Seminar/Training", credentialUrl: "https://drive.google.com/file/d/1ddjzwY8-05b6tFXV9jwLkSRHwXF49_xG/view?usp=sharing" },
  { title: "KEMENDIKBUDRISTEK", issuer: "KEMENDIKBUDRISTEK", date: "Nov 9, 2022", image: "/images/kemendikbudristek.webp", category: "Seminar/Training", credentialUrl: "https://drive.google.com/file/d/16l6142DDDe98Hz8_ZrsJ4l_jaPuTMqPW/view?usp=sharing" },
  { title: "IEEE - IC2IE 5th", issuer: "IEEE", date: "Nov 16, 2022", image: "/images/ieee.jpeg", category: "Seminar/Training", credentialUrl: "https://drive.google.com/file/d/1ctvG04PG9dBBSG_umdvuQ0SV0sr3QLtG/view?usp=sharing" },
  { title: "Propertree (Start-Up)", issuer: "CEP CCIT FTUI", date: "Jun 7, 2023", image: "/images/propertree.webp", category: "Seminar/Training", credentialUrl: "https://drive.google.com/file/d/16LD3rnxJ_qO2GqufV-iO-H4QN3Oyvm1A/view?usp=sharing" },
  { title: "Alumni Sharing", issuer: "CEP CCIT FTUI", date: "Jul 5, 2023", image: "/images/alumni.webp", category: "Seminar/Training", credentialUrl: "https://drive.google.com/file/d/1uBGew1llQIb0hHiWGxPuh1vCXvtYR1MO/view?usp=sharing" },
  { title: "Persiapan Karir Talenta Digital 5.0", issuer: "Alterra Academy", date: "Jul 5, 2023", image: "/images/alterra.webp", category: "Seminar/Training", credentialUrl: "https://drive.google.com/file/d/1MkjsyCrnwp2WsUd0JX6CeoMO7e0_b69Q/view?usp=sharing" },
];