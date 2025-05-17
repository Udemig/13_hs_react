# Yazılım Mimarisi

- Yazılım mimarisi, bir yazılı (uygulama, web sitesi, api, oyun) yapı taşlarını, bu yapı taşlarının biribiriyle olan etkileşimlerin, sistemdeki akışları, karar noktalarını ve performans ile sürdürlebilrilik gereksimlerini kapayan bir disiplindir.

## Yapı Taşları

### 1) Bileşenler (Components)

- Mimarinin işlevsel birimlerini temsil eder.
- Birbiriyle etkileşim halindedir.

### 2) Bağlantılar (Connections)

- Bileşenlerin birbiriyle olan etkileşimini temsil eder.
- Frontend tarafında kullanılan state yönetim araçları: Redux, Context API, Zustand
- Backend tarafında kullanılan state yönetim araçları: JWT, Session, Cookie
- Backend tarafında RabbitMQ, Kafka gibi iletişim sistemleri
- Backend tarafında veritabanı bağlantıları

### 3) Kalite Nitelikleri

- Sistemden beklenen performans, ölçeklenebilirlik, güvenlik, erişilebilirlik gibi gerkesinimleri ifade eder.

### 4) Teknoloji Kısıtlamaları

- Teknolojik veya işlevsel kısıtlamalardır.
- Kullanılacak teknoloji, diller, frameworkler, veritabanları, iletişim sistemleri gibi.
- Bulut platformları (AWS, Azure, Google Cloud, Firebase), kubernetes, docker gibi teknolojilerin kullanılması gibi.

### 5) Tasarım Desenleri (Design Patterns)

- Yazılım mimarisinin yapısının tasarımında kullanılan desenlerdir.
- Örnekler: MVC, MVP, MVVM, Clean Architecture, Hexagonal Architecture, Onion Architecture, CQRS, Event Sourcing, Domain Driven Design (DDD), Microservices, Serverless Architecture, etc.

- Monolithic Architecture
- - Tüm sistemn tek bir kod tabanın yazıldığı ve tek bir yerden dağıtıldığı (yayınlandığı) model
- - Örn: Bütün amazon websitesinin tamamını tek bir react projesinde yazma
- - Örn: Bütütn amazon backendinin tek bir nodejs projesinde yazılması

- Microservices Architecture
- - Sistemin küçük, bağımsız servislerden oluştuğu model
- - Örn: Amazon websitesinin her bir bölümünün (ürün, kullanıcı, satıcı paneli, ödeme, admin paneli) ayrı bir servis olarak yazılması
- - Örn: Bütün amazon backendinin ayrı ayrı yazılıp docker üzerinde çalıştırılması

- MVC (Model, View, Controller) Pattern
- - Model: Veri ve iş mantığını içerir
- - View: Kullanıcı arayüzünü içerir
- - Controller: İş mantığını kontrol eder
- - Örn: .NET Core gibi frameworklerde kullanılır

- Component-Based Architecture
- - Yazılımın, bileşenlerden oluştuğu model
- - Örn: React, Vue, Angular gibi frameworklerde kullanılır

## Doğru Yazılım Mimarisinin Faydaları

1. Performans: İyi tasarlanmış bir mimari sistemin kaynaklaırnı verimli kullanmamızı sağlar

2. Ölçeklenebilirlik: İyi tasarlanmış bir mimari sistemin ölçeklenmesi daha kolaydır.

3. Bakım ve Geliştirilebilirliği kolaylaştırır.

4. Ekipler arası iş birliği ve verimlilik artar

5. Maaliyet verimliliğini artırır.

6. Yeniden Kullanılabilirlik: İyi tasarlanmış bir mimari sistemin yeniden kullanılabilirliği artar.

# S.O.L.I.D Prensibi

- S: Single Responsibility Principle (Tek Sorumluluk Prensibi)
- O: Open/Closed Principle (Açık/Kapalı Prensibi)
- L: Liskov Substitution Principle (Liskov Yerine Geçme Prensibi)
- I: Interface Segregation Principle (Arayüz Ayrımı Prensibi)
- D: Dependency Inversion Principle (Bağımlılık Ters Çevirme Prensibi)

Elbette! Aşağıda tüm açıklamaları ve örnek kodları markdown formatında sana özel olarak düzenledim. Kopyalayıp istediğin yerde kullanabilirsin.

---

# SOLID Prensipleri (JavaScript / React ile Açıklama ve Örnekler)

## 1. S — Single Responsibility Principle (Tek Sorumluluk Prensibi)

Bir sınıf ya da fonksiyon sadece bir işi yapmalı ve sadece o sorumluluktan değiştirilmeli.

### ❌ Kötü Örnek

```jsx
function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return user ? <div>{user.name}</div> : <div>Loading...</div>;
}
```

### ✅ İyi Örnek

```jsx
function useUserData() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return user;
}

function UserProfile() {
  const user = useUserData();
  return user ? <div>{user.name}</div> : <div>Loading...</div>;
}
```

---

## 2. O — Open/Closed Principle (Açık/Kapalı Prensibi)

Sınıflar/görevler yeni özelliklere açık, ancak mevcut kod değişikliğine kapalı olmalı.

### ❌ Kötü Örnek

```js
function processPayment(type, amount) {
  if (type === "credit") {
    // kredi kartı işlemleri
  } else if (type === "paypal") {
    // PayPal işlemleri
  }
}
```

### ✅ İyi Örnek

```js
class PaymentMethod {
  pay(amount) {
    throw "Not implemented";
  }
}

class CreditCard extends PaymentMethod {
  pay(amount) {
    console.log("Credit card paid", amount);
  }
}

class PayPal extends PaymentMethod {
  pay(amount) {
    console.log("PayPal paid", amount);
  }
}

function processPayment(paymentMethod, amount) {
  paymentMethod.pay(amount);
}

processPayment(new CreditCard(), 100);
```

---

## 3. L — Liskov Substitution Principle (Yerine Geçme Prensibi)

Alt sınıf, üst sınıfın yerine geçebilmeli ve sistem beklenen şekilde çalışmaya devam etmeli.

### ❌ Kötü Örnek

```js
class Bird {
  fly() {
    console.log("Flying");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly!");
  }
}
```

### ✅ İyi Örnek

```js
class Bird {}

class FlyingBird extends Bird {
  fly() {
    console.log("Flying");
  }
}

class Penguin extends Bird {
  swim() {
    console.log("Swimming");
  }
}

class Eagle extends FlyingBird {}
```

---

## 4. I — Interface Segregation Principle (Arayüz Ayrımı Prensibi)

Sınıflar kullanmadıkları metodlara bağımlı kalmamalıdır.

### ❌ Kötü Örnek

```js
class Animal {
  fly() {}
  walk() {}
}

class Dog extends Animal {
  fly() {
    throw new Error("Dogs can't fly");
  }
}
```

### ✅ İyi Örnek

```js
class Walkable {
  walk() {
    console.log("Walking");
  }
}

class Flyable {
  fly() {
    console.log("Flying");
  }
}

class Dog extends Walkable {}
class Bird extends Walkable {
  constructor() {
    Object.assign(this, new Flyable());
  }
}
```

---

## 5. D — Dependency Inversion Principle (Bağımlılıkların Tersine Çevrilmesi Prensibi)

Yüksek seviyeli modüller, düşük seviyelilere doğrudan bağlı olmamalı; ikisi de soyutlamalara bağlı olmalı.

### ❌ Kötü Örnek

```js
class App {
  constructor() {
    this.logger = new ConsoleLogger();
  }

  run() {
    this.logger.log("App is running");
  }
}

class ConsoleLogger {
  log(msg) {
    console.log(msg);
  }
}
```

### ✅ İyi Örnek

```js
class App {
  constructor(logger) {
    this.logger = logger;
  }

  run() {
    this.logger.log("App is running");
  }
}

class ConsoleLogger {
  log(msg) {
    console.log(msg);
  }
}

const logger = new ConsoleLogger();
const app = new App(logger);
app.run();
```

---

## Bonus: Rating Bileşeni Refaktör Önerisi (Tek Sorumluluk ve Kod Tekrarından Kaçınma)

### Orijinal Bileşenler

```jsx
const Rating = ({ movie }) => {
  return (
    <div>
      <p>{movie.rating}</p>
    </div>
  );
};

const Rating2 = ({ rating }) => {
  return (
    <div>
      <p>{rating}</p>
    </div>
  );
};
```

### İyileştirilmiş (Tek Bileşen)

```jsx
const Rating = ({ rating, movie }) => {
  const finalRating = rating ?? movie?.rating;
  return (
    <div>
      <p>{finalRating}</p>
    </div>
  );
};
```

Kullanımı:

```jsx
<Rating rating={8.3} />
<Rating movie={{ title: "Inception", rating: 9.0 }} />
```

---
