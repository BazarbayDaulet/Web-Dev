import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

interface Product {
  name: string;
  description: string;
  rating: number;
  likes: number;
  image: string;
  link: string; 
  gallery:string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  categories = ['Телефон и гаджеты','Бытовая техника','Мебель', 'Красота и здоровье'];
  selectedCategory = 'Products';

  likedProducts = new Set<string>();

  products: Record<string, Product[]> = {
    'Телефон и гаджеты':[
      {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      likes: 1502,  
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
      ],
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium',
        name: 'Зарядное устройство Apple 18W USB-C Power Adapter USB Type-C белый',
        description: 'Адаптер Apple 18W USB-C Power Adapter представляет собой компактное и эффективное зарядное устройство, предназначенное для быстрой и эффективной зарядки ваших устройств.',
        rating: 4.5,
        link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000',
        likes: 54, 
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        ],
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h7c/83768947474462.png?format=gallery-medium',
        name: 'Чехол Для Apple iPhone 15 Pro прозрачный',
        description: 'Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнений. ',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-15-pro-prozrachnyi-113282783/?c=750000000',
        likes: 233, 
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        ],
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/h61/86419823362078.jpg?format=gallery-medium',
        name: 'Чехол Для Apple iPhone 14 Pro черный',
        description: 'Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнений',
        rating: 4.9,
        link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-14-pro-chernyi-120950498/?c=750000000',
        likes: 5, 
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        ],
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/haf/65966324580382.jpg?format=gallery-medium',
        name: 'Подставка Afkas-nova AK-37 черный',
        description: 'Afkas-nova AK-37 настольный держатель для смартфона. ',
        rating: 4.1,
        link: 'https://kaspi.kz/shop/p/podstavka-afkas-nova-ak-37-chernyi-107656268/**************/',
        likes: 3, 
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        ],
      },

    ],
    'Бытовая техника':[
      {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h9b/82803977289758.jpg?format=gallery-medium',
      name: 'Электрочайник Yingzheng ZY-305 черный',
      description: 'Современный и стильный, этот электрический чайник сочетает в себе элегантный дизайн и передовые функции для вашего удобства.',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-305-chernyi-112526442/?c=750000000',
      likes: 0, 
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
      ],
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/hcf/63791470936094.jpg?format=gallery-medium',
        name: 'Пылесос Deerma DX115C черный',
        description: 'Вертикальный пылесос Deerma DX115C способен в корне изменить ваше представление о сухой уборке и поможет домочадцам полюбить этот процесс.',
        rating: 4.4,
        link: 'https://kaspi.kz/shop/p/deerma-dx115c-chernyi-3701430/?c=750000000',
        likes: 0, 
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        ],
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium',
        name: 'Стиральная машина LG F2J3NS0W белый',
        description: 'Глубина стиральной машины LG F2J3NS0W всего 44 см, благодаря чему она поместится даже в небольшую ванную комнату.',
        rating: 4.8,
        link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000',
        likes: 888, 
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        ],
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h37/h44/87138526232606.jpg?format=gallery-medium',
        name: 'https://resources.cdn-kaspi.kz/img/m/p/h37/h44/87138526232606.jpg?format=gallery-medium',
        description: 'Характеристики Микроволновая печь Hansa AMMF19M1SH серебристый',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/hansa-ammf19m1sh-serebristyi-123644190/?c=750000000',
        likes: 12, 
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        ],
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h69/hfe/84636579004446.png?format=gallery-medium',
        name: 'Увлажнитель воздуха Maxmoll H2O A5 белый',
        description: 'Характеристики Увлажнитель воздуха Maxmoll H2O A5 белый',
        rating: 3.9,
        link: 'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-maxmoll-h2o-a5-belyi-109792185/?c=750000000',
        likes: 12, 
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        ],
      },

    ],
    'Мебель':[
      {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h60/he1/84668650291230.png?format=gallery-medium',
      name: 'Вешалка напольная, izox, металл, 110x150 см, черный',
      description: 'Напольная металлическая вешалка представляет собой прочную и надёжную конструкцию, способную выдерживать значительный вес одежды.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/veshalka-napol-naja-izox-metall-110x150-sm-chernyi-113366378/?c=750000000',
      likes: 0, 
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
      ],
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h48/86777038274590.png?format=gallery-medium',
        name: 'Morbido диван прямой Комфорт, обивка микровелюр, 80х210х80 см, серый',
        description: 'Практичный  диван-кровать с легкой системой трансформации.',
        rating: 4.7,
        link: 'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000',
        likes: 0, 
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        ],
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hb6/hdf/86657938882590.jpg?format=gallery-medium',
        name: 'Игровое кресло ATLANTA мебель GC-1050, черный, красный',
        description: 'Кресло это игровое кресло, разработанное специально для обеспечения комфорта и поддержки во время длительных игровых сессий.',
        rating: 5,
        link: 'Кресло это игровое кресло, разработанное специально для обеспечения комфорта и поддержки во время длительных игровых сессий. ',
        likes: 0, 
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        ],
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h14/h70/85250050392094.jpg?format=gallery-medium',
        name: 'Полка Полка для модема 5455, 35х20x15 см, белый',
        description: 'Характеристики Полка Полка для модема 5455, 35х20x15 см, белый',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/polka-dlja-modema-5455-35h20x15-sm-belyi-116891113/?c=750000000',
        likes: 0, 
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        ],
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h44/85302904258590.jpg?format=gallery-medium',
        name: 'Раскладушка Комфорт 1427213, 190х68х40 см, серый',
        description: 'Дополнительно Размеры в сложенном виде29х21х105 см',
        rating: 13,
        link: 'https://kaspi.kz/shop/p/raskladushka-komfort-1427213-190h68h40-sm-seryi-117051288/?c=750000000',
        likes: 132 ,
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        ],
      },
],
    'Красота и здоровье': [
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p4f/p2f/18223236.jpg?format=gallery-medium',
        name: 'DETVFO Аида тональный крем DETVFO 40 мл',
        description: 'Характеристики DETVFO Аида тональный крем DETVFO 40 мл',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/detvfo-aida-tonal-nyi-krem-detvfo-40-ml-131792710/?c=750000000',
        likes: 0, 
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        ],
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/h67/64437574336542.jpg?format=gallery-medium',
        name: 'DMND спонж скошенный, спонж капля полиуретан 2 шт',
        description: 'Спонж для макияжа идеально наносит и растушёвывает косметическое средство, создавая идеальное покрытие.',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/dmnd-sponzh-skoshennyi-sponzh-kaplja-poliuretan-2-sht-104557208/?c=750000000',
        likes: 500, 
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        ],
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pea/p7c/12475967.jpeg?format=gallery-medium',
        name: 'MISS TAIS Mauve карандаш коричневый №780',
        description: 'Карандаши Miss Tais  безумно мягкие, очень легко наносятся, закрашивают губки, как матовая помада, стойкие.',
        rating: 1,
        link: 'https://kaspi.kz/shop/p/miss-tais-mauve-karandash-korichnevyi-780-24800237/?c=750000000',
        likes: 12, 
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        ],
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h17/hb9/86704543596574.jpg?format=gallery-medium',
        name: 'Gulf Girl 3 steps набор для контуринга 01',
        description: 'Характеристики Gulf Girl 3 steps набор для контуринга 01',
        rating: 3,
        link: 'https://kaspi.kz/shop/p/gulf-girl-3-steps-nabor-dlja-konturinga-01-122092710/?c=750000000',
        likes: 1, 
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        ],
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p96/p88/17759613.jpg?format=gallery-medium',
        name: 'Маска для лица Farmstay тканевая Collagen 1 шт',
        description: 'Разглаживающая маска на основе коллагена улучшает текстуру кожи, устраняя небольшие неровности. ',
        rating: 3,
        link: 'https://kaspi.kz/shop/p/farmstay-tkanevaja-collagen-1-sht-101076161/?c=750000000',
        likes: 2, 
        gallery: [
          'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
          'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
        ],
      },

    ]
  };

  get currentProducts(): Product[] {
    return this.products[this.selectedCategory] || [];
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }


  likeProduct(productName: string) {
    const product = this.products[this.selectedCategory].find(p => p.name === productName);
    if (!product) return;

    if (this.likedProducts.has(productName)) {
      product.likes--;
      this.likedProducts.delete(productName);
    } else {
      product.likes++;
      this.likedProducts.add(productName);
    }
  }

  removeProduct(index: number) {
    this.products[this.selectedCategory].splice(index, 1);
  }

  share(link: string) {
    const message = encodeURIComponent(`Check this product: ${link}`);
    window.open(`https://t.me/share/url?url=${link}&text=${message}`, '_blank');
  }

}