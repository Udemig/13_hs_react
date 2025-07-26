# Next.js Advanced Concepts

Bu proje Next.js'in gelişmiş özelliklerini kapsamaktadır. Aşağıda her bir konunun detaylı açıklaması ve kullanım örnekleri bulunmaktadır.

## 📑 İçerik

- [Parallel Routes](#parallel-routes)
- [Intercepting Routes](#intercepting-routes)
- [Image Optimization](#image-optimization)
- [Rendering Types](#rendering-types)
- [Data Fetching](#data-fetching)
- [Import Strategies](#import-strategies)
- [Font Optimization](#font-optimization)
- [Next.js Hooks](#nextjs-hooks)
- [Static Site Generation](#static-site-generation)

---

## Parallel Routes

Parallel Routes, aynı anda birden fazla bağımsız sayfayı aynı layout içerisinde render etmeye yarar.

### Temel Özellikler

- Her sayfa kendi bağımsız yükleme mantığına sahiptir (loading, error)
- `@slot` formatında tanımlanır (örn: `@notifications`, `@revenue`)
- Slot'lar layout'a prop olarak gönderilir
- Aynı anda birden fazla sayfa paralel olarak yüklenebilir

### Neden Components Yerine Parallel Routes?

| Normal Components    | Parallel Routes          |
| -------------------- | ------------------------ |
| ❌ SSR desteği yok   | ✅ SSR desteği var       |
| ❌ SSG desteği yok   | ✅ SSG desteği var       |
| ❌ Metadata yok      | ✅ Metadata desteği      |
| ❌ Middleware yok    | ✅ Middleware desteği    |
| ❌ Loading/Error yok | ✅ Loading/Error desteği |

### Kullanım Örneği

```jsx
// layout.jsx
export default function DashboardLayout({
  children,
  notifications,
  revenue,
  users,
}) {
  return (
    <div className="dashboard">
      <main>{children}</main>
      <aside className="sidebar">
        {notifications}
        {revenue}
        {users}
      </aside>
    </div>
  );
}
```

---

## Intercepting Routes

Intercepting Routes, kullanıcı deneyimini artırmak için modal tabanlı navigation sağlar.

### Nasıl Çalışır?

1. **Link tıklama**: Modal açılır, içerik modal içinde gösterilir
2. **Sayfa yenileme**: Modal yerine tam sayfa gösterilir
3. **Direkt URL**: Modal açılmaz, direkt sayfa yüklenir

### Faydaları

- ✅ Gelişmiş kullanıcı deneyimi
- ✅ SEO dostu
- ✅ Hızlı içerik görüntüleme
- ✅ Geri buton desteği

### Intercepting Patterns

| Pattern    | Açıklama       |
| ---------- | -------------- |
| `(.)`      | Aynı seviye    |
| `(..)`     | Bir üst seviye |
| `(..)(..)` | İki üst seviye |
| `(...)`    | Root seviye    |

---

## Image Optimization

Next.js, resimleri otomatik olarak optimize eder ve modern web standartlarına uygun hale getirir.

### Image Component Avantajları

```jsx
import Image from "next/image";

export default function OptimizedImage() {
  return (
    <Image
      src="/nature.jpg"
      alt="Doğa manzarası"
      width={800}
      height={600}
      priority // Above the fold için
      placeholder="blur" // Yükleme sırasında blur
    />
  );
}
```

### Optimizasyon Özellikleri

- 🎯 **Format**: Otomatik WebP/AVIF dönüşümü
- 📐 **Boyut**: Responsive boyutlandırma
- 🚀 **Lazy Loading**: Görünüme yakın yükleme
- 💾 **Caching**: Otomatik cache yönetimi
- 🔧 **Kalite**: Adaptif kalite ayarları

---

## Rendering Types

Next.js'de iki temel rendering türü vardır.

### Server Side Rendering (SSR)

```jsx
// Server Component (varsayılan)
export default async function ServerPage() {
  const data = await fetch("https://api.example.com/data");
  const result = await data.json();

  return <div>{result.content}</div>;
}
```

### Client Side Rendering (CSR)

```jsx
"use client"; // Client Component

import { useState, useEffect } from "react";

export default function ClientPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return <div>{data?.content}</div>;
}
```

### Component Kombinasyonları

| Üst Component | Alt Component | Sonuç                       |
| ------------- | ------------- | --------------------------- |
| Server        | Client        | ✅ Üst: Server, Alt: Client |
| Client        | Server        | ❌ İkisi de Client olur     |

### Ne Zaman Hangisini Kullanmalı?

#### Server Component Kullan:

- ✅ Veri fetching
- ✅ Backend kaynaklarına erişim
- ✅ Hassas bilgiler (API keys)
- ✅ SEO önemli

#### Client Component Kullan:

- ✅ Event handlers (onClick, onChange)
- ✅ React hooks (useState, useEffect)
- ✅ Browser API'leri
- ✅ Interaktif özellikler

---

## Data Fetching

Next.js'de veri çekme işlemleri için önerilen yöntem Server Components kullanmaktır.

### Server Components'ta Veri Çekme

```jsx
// Recommended
export default async function ProductsPage() {
  const products = await fetch("https://api.store.com/products", {
    next: { revalidate: 3600 }, // 1 saat cache
  });

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

### Cache Seçenekleri

```jsx
// Cache forever
fetch(url, { cache: "force-cache" });

// No cache
fetch(url, { cache: "no-store" });

// Revalidate after time
fetch(url, { next: { revalidate: 60 } });

// Revalidate with tags
fetch(url, { next: { tags: ["products"] } });
```

### Avantajları

- 🎯 **Caching**: Otomatik cache yönetimi
- ⚡ **Performance**: Gereksiz istekleri önler
- 🔄 **Paylaşım**: Aynı veri birden fazla yerde kullanılabilir
- 🛡️ **Güvenlik**: API anahtarları server'da kalır

---

## Import Strategies

### Absolute Import (@)

```jsx
// jsconfig.json veya tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/utils/*": ["./src/utils/*"]
    }
  }
}

// Kullanım
import Button from '@/components/Button';
import { delay } from '@/utils/helpers';
```

### Relative Import

```jsx
// Mevcut dosya konumuna göre
import Component from "../components/Component";
import { helper } from "../../utils/helper";
```

### Karşılaştırma

| Absolute Import         | Relative Import            |
| ----------------------- | -------------------------- |
| ✅ Dosya taşıma kolay   | ❌ Dosya taşıma zor        |
| ✅ Temiz import yolları | ❌ Karmaşık import yolları |
| ✅ IDE desteği iyi      | ⚠️ Bazen karışık           |

---

## Font Optimization

Next.js fontları otomatik olarak optimize eder.

### Google Fonts

```jsx
import { Inter, Roboto } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
```

### Local Fonts

```jsx
import localFont from "next/font/local";

const crackajack = localFont({
  src: [
    {
      path: "../assets/Crackajack.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-crackajack",
});
```

---

## Next.js Hooks

### useRouter (Client Only)

```jsx
"use client";
import { useRouter } from "next/navigation";

export default function NavigationComponent() {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.back()}>Geri</button>
      <button onClick={() => router.forward()}>İleri</button>
      <button onClick={() => router.push("/dashboard")}>Git</button>
      <button onClick={() => router.replace("/login")}>Değiştir</button>
      <button onClick={() => router.refresh()}>Yenile</button>
    </div>
  );
}
```

### usePathname (Client Only)

```jsx
"use client";
import { usePathname } from "next/navigation";

export default function ActiveLink() {
  const pathname = usePathname();

  return (
    <nav>
      <Link
        href="/dashboard"
        className={pathname === "/dashboard" ? "active" : ""}
      >
        Dashboard
      </Link>
    </nav>
  );
}
```

### useParams (Client Only)

```jsx
"use client";
import { useParams } from "next/navigation";

export default function DynamicPage() {
  const params = useParams();

  return <h1>User ID: {params.id}</h1>;
}
```

### useSearchParams (Client Only)

```jsx
"use client";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return <h1>Arama: {query}</h1>;
}
```

### redirect (Server Only)

```jsx
import { redirect } from "next/navigation";

export default async function ProtectedPage() {
  const user = await getUser();

  if (!user) {
    redirect("/login");
  }

  return <h1>Hoş geldin {user.name}</h1>;
}
```

### notFound (Server & Client)

```jsx
import { notFound } from "next/navigation";

export default async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound(); // 404 sayfasını gösterir
  }

  return <h1>{product.name}</h1>;
}
```

---

## Static Site Generation

Next.js'de sayfalar varsayılan olarak mümkün olduğunca statik hale getirilir.

### Sayfa Türleri

#### Static Sayfalar

- Build anında oluşturulur
- Çok hızlı yükleme
- CDN cache friendly

#### Dynamic Sayfalar

- Request anında oluşturulur
- Güncel veriler
- Kullanıcıya özel içerik

### Incremental Static Regeneration (ISR)

```jsx
export default async function PostsPage() {
  const posts = await fetch("https://api.blog.com/posts", {
    next: { revalidate: 3600 }, // Her saat yenile
  });

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
```

### generateStaticParams

```jsx
// app/posts/[id]/page.jsx
export async function generateStaticParams() {
  const posts = await fetch("https://api.blog.com/posts");

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default async function PostPage({ params }) {
  const post = await getPost(params.id);
  return <article>{post.content}</article>;
}
```

### Revalidation Türleri

| Tür            | Açıklama           | Kullanım                   |
| -------------- | ------------------ | -------------------------- |
| **Time-based** | Belirli süre sonra | `revalidate: 3600`         |
| **On-demand**  | Manuel tetikleme   | `revalidateTag('posts')`   |
| **Path-based** | Belirli sayfa      | `revalidatePath('/posts')` |

---

## Best Practices

### 🎯 Performance

- Server Components'ı tercih et
- Image component kullan
- Uygun cache stratejileri

### 🔧 Code Organization

- Absolute imports kullan
- Component'ları mantıklı böl
- TypeScript kullan

### 🛡️ Security

- API routes'ları koru
- Environment variables kullan
- Input validation yap

### 📱 User Experience

- Loading states ekle
- Error boundaries kullan
- Intercepting routes değerlendir
