import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
  gallery: string[];
  selectedImage?: string; 
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductsComponent {
  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. ',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium',
      ],
      selectedImage: '', 
    }, 
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h29/h56/85584155312158.jpg?format=gallery-medium',
      name: 'Зимняя куртка Adidas синий',
      description: 'Эта городская куртка сочетает в себе уличный стиль и технологичность одежды для туризма. Стеганый синтетический утеплитель хорошо согревает и не требует особого ухода. ',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/zimnjaja-kurtka-adidas-gv5329-sinii-m-117931369/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h02/h51/85584155508766.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb5/h40/85584155639838.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h51/h20/85584155770910.jpg?format=gallery-medium',
      ],
      selectedImage: '', 
    }, 
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0d/hc8/84558388887582.jpg?format=preview-large',
      name: 'Ноутбук Acer Aspire 3 15.6" / 8 Гб / SSD 256 Гб / Win 11 / A315-35 / NX.A9AEX.00H',
      description: 'Воспроизводите видео быстро и без задержек, просматривайте веб-страницы или выполняйте рабочие задачи благодаря процессору и видеокарте от Intel®.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/acer-aspire-3-15-6-8-gb-ssd-256-gb-win-11-a315-35-nx-a9aex-00h-114792265/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8f/h39/84558388953118.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf4/h3e/84558389018654.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf7/h99/84558389084190.jpg?format=gallery-medium',
      ],
      selectedImage: '', 
    }, 
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hf9/80908428673054.png?format=gallery-medium',
      name: 'Электрогитара Stagg Rockdale Stars Limited Edition SSH Black Pack 2 черный',
      description: 'Электрогитара Stagg Rockdale Stars Limited Edition SSH Black Pack 2 — это стильный и доступный инструмент, идеально подходящий для начинающих и промежуточных музыкантов. ',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/stagg-rockdale-stars-limited-edition-ssh-black-pack-2-chernyi-110228839/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8c/h5d/80648201568286.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h67/hdc/80648201633822.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h43/hef/80648201699358.jpg?format=gallery-medium',
      ],
      selectedImage: '',
    }, 
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
      name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
      description: 'Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p78/p98/5542340.png?format=gallery-medium',
      ],
      selectedImage: '', 
    }, 
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/hd5/86002926223390.jpg?format=preview-large',
      name: 'Шуруповерт 691444820',
      description: 'Ударная аккумуляторная дрель-шуруповёрт. Благодаря быстрозажимному патрону, смена оснасти не занимает много времени. Профессиональная система 48 Ватт с аккумуляторами и зарядными устройствами.',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/shurupovert-691444820-119356208/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/hd5/86002926223390.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc1/h8f/86002926288926.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h17/h44/86002926354462.jpg?format=gallery-medium',
      ],
      selectedImage: '', 
    }, 
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hed/h20/80713648570398.jpg?format=preview-large',
      name: 'Кольцо Diamond Union Diamond exclusive размер 18 вес 2.33 г золото, фианит',
      description: 'Характеристики Кольцо Diamond Union Diamond exclusive размер 18 вес 2.33 г золото, фианит',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/diamond-union-diamond-exclusive-razmer-18-ves-2-33-g-zoloto-fianit-110299589/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hed/h20/80713648570398.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9e/h2b/80713648963614.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb6/h89/80713649094686.jpg?format=gallery-medium',
      ],
      selectedImage: '', 
    }, 
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hae/h9f/64678265716766.jpg?format=gallery-medium',
      name: 'DivanvAlmaty Вест, обивка велюр, 100x400x100 см, бежевый',
      description: 'Характеристики DivanvAlmaty Вест, обивка велюр, 100x400x100 см, бежевый',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/divanvalmaty-vest-obivka-veljur-100x400x100-sm-bezhevyi-101880658/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hae/h9f/64678265716766.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha4/h60/64678268665886.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hef/hd4/64678272270366.jpg?format=gallery-medium',
      ],
      selectedImage: '', 
    }, 
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/h26/63968848248862.jpg?format=gallery-medium',
      name: 'Акустическая система M-Audio BX3',
      description: 'Предназначенные для live стриминга, гейминга, создания контента/музыки, просмотра фильмов или прослушивания любимой музыки, M-Audio BX3 предлагают 120 Вт кристально чистого звука в привлекательном стильном дизайне.',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/m-audio-bx3-100951709/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h46/h7e/63968850509854.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/hca/63968851984414.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha7/h97/63968854835230.jpg?format=gallery-medium',
      ],
      selectedImage: '', 
    }, 
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he7/hb1/86887758004254.jpg?format=gallery-medium',
      name: 'Умная колонка Яндекс Станция Лайт 2 фиолетовый',
      description: 'Умная колонка Новая Яндекс.Станция Мини YNDX-00020K черного цвета оснащена LED-дисплеем на передней стороне. Он показывает время, таймер и погоду. ',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-mini-s-chasami-yndx-00020-chernyi-102580021/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/he2/h2d/86887758069790.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h60/hbc/86887758135326.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hff/h3d/86887758200862.jpg?format=gallery-medium',
      ],
      selectedImage: '', 
    }
  ];

  changeImage(product: Product, newImage: string) {
    product.selectedImage = newImage;
  }

  shareOnWhatsApp(product: Product) {
    window.open(`https://wa.me/?text=Check%20this%20out:%20${product.link}`, '_blank');
  }

  shareOnTelegram(product: Product) {
    window.open(`https://t.me/share/url?url=${product.link}&text=Check%20this%20out!`, '_blank');
  }
}
