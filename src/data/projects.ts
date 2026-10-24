// src/data/projects.ts
/**
 * Proyectos del portafolio: datos de las tarjetas (Inicio y listado) y de las
 * páginas de detalle. Agregar un proyecto no requiere tocar los componentes.
 * Textos con una versión por idioma (Localized); nombres propios y tecnologías no se traducen.
 * Las capturas viven en src/assets/projects/<proyecto>/ (Astro las optimiza);
 * el video y su poster viven en public/videos/ (se sirven tal cual).
 * Política de contenido: sin cifras exactas de clientes ni de facturación.
 */

import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n/utils';

import ecommerce01 from '../assets/projects/ecommerce/ecommerce-01-catalog.png';
import ecommerce02 from '../assets/projects/ecommerce/ecommerce-02-cart.png';
import ecommerce03 from '../assets/projects/ecommerce/ecommerce-03-checkout.png';
import ecommerce04 from '../assets/projects/ecommerce/ecommerce-04-payment-gateway.png';
import ecommerce05 from '../assets/projects/ecommerce/ecommerce-05-orders-board.png';
import ecommerce06 from '../assets/projects/ecommerce/ecommerce-06-orders-history.png';

import servicehub01 from '../assets/projects/service-hub/servicehub-01-home-hero.png';
import servicehub02 from '../assets/projects/service-hub/servicehub-02-home-services.png';
import servicehub03 from '../assets/projects/service-hub/servicehub-03-booking-service.png';
import servicehub04 from '../assets/projects/service-hub/servicehub-04-booking-date.png';
import servicehub05 from '../assets/projects/service-hub/servicehub-05-booking-user.png';
import servicehub06 from '../assets/projects/service-hub/servicehub-06-admin-reservations.png';
import servicehub07 from '../assets/projects/service-hub/servicehub-07-admin-day-schedule.png';

/** Captura de la galería: alt describe lo que se ve; caption es el título corto visible. */
export interface GalleryImage {
  src: ImageMetadata;
  alt: Localized;
  caption: Localized;
}

/** Video del proyecto: archivo y poster en public/videos/ (rutas absolutas). */
export interface ProjectVideoData {
  src: string;
  poster: string;
  aspectRatio: string; // proporción del video para reservar su espacio (ej. '9 / 16')
  title: Localized;
}

/** Paso del flujo de integración: de qué actor a cuál, y qué ocurre. */
export interface FlowStep {
  from: Localized;
  to: Localized;
  title: Localized;
  text: Localized;
}

export interface FlowData {
  title: Localized;
  steps: FlowStep[];
}

export interface ProjectLink {
  label: Localized;
  href: string;
}

export interface Project {
  slug: string; // se usa en la URL: /<idioma>/projects/<slug>/
  name: Localized;
  summary: Localized; // texto de la tarjeta y meta descripción de la página
  inDevelopment?: boolean;
  cover: ImageMetadata; // portada de la tarjeta (se recorta al centro)
  context: Localized;
  role: Localized;
  stack: string[];
  integrations?: string[];
  features: Localized<string[]>;
  result: Localized;
  links: ProjectLink[];
  gallery: GalleryImage[];
  video?: ProjectVideoData;
  flow?: FlowData;
}

export const projects: Project[] = [
  {
    slug: 'teicopos',
    name: { es: 'E-commerce TeicoPOS', en: 'TeicoPOS E-commerce' },
    summary: {
      es: 'Plataforma de comercio electrónico multi-comercio para tiendas y restaurantes, conectada al POS de TeicoPOS. Más de 10 comercios en producción.',
      en: 'Multi-store e-commerce platform for shops and restaurants, connected to the TeicoPOS point-of-sale system. 10+ stores in production.',
    },
    cover: ecommerce01,
    context: {
      es: 'TeicoPOS quería ofrecer a sus clientes un producto nuevo: vender en línea los productos que ya administran en su POS. Construí la plataforma que lo hace posible: cada comercio opera su propia tienda, con el catálogo conectado al POS y las ventas enviadas de vuelta hacia él.',
      en: 'TeicoPOS wanted to offer its customers a new product: selling online the products they already manage in their POS. I built the platform that makes it possible: each merchant runs its own store, with the catalog connected to the POS and sales sent back to it.',
    },
    role: {
      es: 'Desarrollo full stack de principio a fin: backend, frontend, integraciones y despliegue. Lo construí hasta llevarlo a producción.',
      en: 'End-to-end full stack development: backend, frontend, integrations and deployment. I built it and took it to production..',
    },
    stack: ['Python', 'Django', 'Vue.js', 'DigitalOcean', 'Cloudflare', 'Brevo'],
    integrations: ['Sistema POS de TeicoPOS', 'ONVO', 'Tilopay', 'Afinia', 'Sistema ERP de CingeSoft'],
    features: {
      es: [
        'Integración con el POS: obtiene los productos y envía los documentos electrónicos.',
        'Pago en línea con tres pasarelas: ONVO, Tilopay y Afinia.',
        'Validación automática de pagos SINPE.',
        'Panel de órdenes, con historial y reportes.',
        'Cupones.',
        'Gestión de usuarios y permisos.',
        'KDS (pantalla de cocina) para restaurantes.',
        'Productos internos: para comercios que solo quieren el e-commerce y no el POS, los productos se crean dentro de la plataforma.',
        'Complementos: opciones que el cliente elige dentro de un platillo; por ejemplo, en un casado, la carne (pollo, res o cerdo).',
      ],
      en: [
        'POS integration: pulls the products and sends the electronic documents.',
        'Online payment with three gateways: ONVO, Tilopay and Afinia.',
        'Automatic SINPE payment validation.',
        'Orders board, with history and reports.',
        'Coupons.',
        'User and permission management.',
        'KDS (kitchen display) for restaurants.',
        'Internal products: for merchants who only want the e-commerce and not the POS, products are created inside the platform.',
        'Add-ons: options the customer picks within a dish; for example, in a Costa Rican casado, the meat (chicken, beef or pork).',
      ],
    },
    result: {
      es: 'Más de 10 comercios la usan en producción, algunos con millones de colones en pedidos, y lleva más de 6 meses funcionando en producción.',
      en: '10+ merchants run on it in production, some with millions of colones in orders, and it has been running in production for over 6 months.',
    },
    links: [
      {
        label: { es: 'Ver tienda de prueba', en: 'View demo store' },
        href: 'https://ayb.cr.teicopos.com',
      },
    ],
    gallery: [
      {
        src: ecommerce01,
        alt: {
          es: 'Captura del catálogo de productos de la tienda en línea.',
          en: 'Screenshot of the online store product catalog.',
        },
        caption: { es: 'Catálogo de productos', en: 'Product catalog' },
      },
      {
        src: ecommerce02,
        alt: {
          es: 'Captura del carrito con los productos seleccionados.',
          en: 'Screenshot of the cart with the selected products.',
        },
        caption: { es: 'Carrito de compras', en: 'Shopping cart' },
      },
      {
        src: ecommerce03,
        alt: {
          es: 'Captura del checkout para realizar el pedido.',
          en: 'Screenshot of the checkout to place the order.',
        },
        caption: { es: 'Checkout del pedido', en: 'Order checkout' },
      },
      {
        src: ecommerce04,
        alt: {
          es: 'Captura del formulario de pago de la pasarela ONVO, integrado con su SDK.',
          en: 'Screenshot of the ONVO payment gateway form, integrated through its SDK.',
        },
        caption: { es: 'Pago con ONVO (SDK de la pasarela)', en: 'Payment with ONVO (gateway SDK)' },
      },
      {
        src: ecommerce05,
        alt: {
          es: 'Captura del panel de administración con el tablero de órdenes.',
          en: 'Screenshot of the admin panel with the orders board.',
        },
        caption: { es: 'Panel de órdenes (administración)', en: 'Orders board (admin)' },
      },
      {
        src: ecommerce06,
        alt: {
          es: 'Captura del historial de órdenes y los reportes en la vista de administración.',
          en: 'Screenshot of the order history and reports in the admin view.',
        },
        caption: {
          es: 'Historial y reportes de órdenes (administración)',
          en: 'Order history and reports (admin)',
        },
      },
    ],
    video: {
      src: '/videos/ecommerce-07-mobile-order.mp4',
      poster: '/videos/ecommerce-07-mobile-order-poster.jpg',
      aspectRatio: '9 / 16', // ajustar a la proporción real de la grabación
      title: { es: 'Pedido completo desde un celular', en: 'A complete order from a phone' },
    },
    flow: {
      title: { es: 'Flujo de una venta', en: 'Flow of a sale' },
      steps: [
        {
          from: { es: 'POS', en: 'POS' },
          to: { es: 'E-commerce', en: 'E-commerce' },
          title: { es: 'Productos', en: 'Products' },
          text: {
            es: 'El POS sincroniza su catálogo con la tienda cada 2 minutos.',
            en: 'The POS syncs its catalog with the store every 2 minutes.',
          },
        },
        {
          from: { es: 'Cliente', en: 'Customer' },
          to: { es: 'E-commerce', en: 'E-commerce' },
          title: { es: 'Pedido', en: 'Order' },
          text: {
            es: 'El cliente arma su carrito y completa el checkout.',
            en: 'The customer builds a cart and completes checkout.',
          },
        },
        {
          from: { es: 'E-commerce', en: 'E-commerce' },
          to: { es: 'Pasarela de pago', en: 'Payment gateway' },
          title: { es: 'Cobro', en: 'Payment' },
          text: {
            es: 'La tienda envía el pago a la pasarela (ONVO, Tilopay o Afinia).',
            en: 'The store sends the payment to the gateway (ONVO, Tilopay or Afinia).',
          },
        },
        {
          from: { es: 'Pasarela de pago', en: 'Payment gateway' },
          to: { es: 'E-commerce', en: 'E-commerce' },
          title: { es: 'Confirmación', en: 'Confirmation' },
          text: {
            es: 'La pasarela devuelve el resultado y el pedido aparece en el panel de órdenes.',
            en: 'The gateway returns the result and the order shows up in the orders board.',
          },
        },
        {
          from: { es: 'E-commerce', en: 'E-commerce' },
          to: { es: 'POS', en: 'POS' },
          title: { es: 'Documento electrónico', en: 'Electronic document' },
          text: {
            es: 'La tienda envía la venta al POS, que genera la proforma, el tiquete o la factura electrónica según corresponda.',
            en: 'The store sends the sale to the POS, which generates the proforma, receipt or electronic invoice as applicable.',
          },
        },
      ],
    },
  },
  {
    slug: 'service-hub',
    name: { es: 'service-hub', en: 'service-hub' },
    summary: {
      es: 'Plataforma de reservas en línea para negocios que manejan citas: agenda, Google Calendar, cupones, fidelización, reportes y gastos.',
      en: 'Online booking platform for appointment-based businesses: scheduling, Google Calendar, coupons, loyalty, reports and expenses.',
    },
    inDevelopment: true,
    cover: servicehub01,
    context: {
      es: 'Como usuario de canchas sintéticas vi que las reservas se gestionan por WhatsApp. Planteé una alternativa: que los negocios reciban reservas en línea y tengan su agenda en un solo lugar. Empecé construyéndola con ese caso en mente y está pensada para cualquier negocio que maneje citas.',
      en: 'As a user of synthetic turf fields I noticed that bookings are handled over WhatsApp. I proposed an alternative: businesses receive bookings online and keep their schedule in one place. I started building it with that case in mind, and it is designed for any appointment-based business.',
    },
    role: {
      es: 'Proyecto personal. Lo diseñé y desarrollé completo, full stack.',
      en: 'Personal project. I designed and built it end to end, full stack.',
    },
    stack: ['Python', 'Django', 'Vue.js', 'DigitalOcean', 'Cloudflare', 'Resend'],
    integrations: ['Google Calendar'],
    features: {
      es: [
        'Gestión de horarios y de servicios.',
        'Reserva en línea para el cliente.',
        'Agenda para el negocio en lista y por horas, e integración con Google Calendar.',
        'Cupones y planes de fidelización.',
        'Reportes y gastos.',
      ],
      en: [
        'Schedule and service management.',
        'Online booking for the customer.',
        'Business agenda as a list and by the hour, with Google Calendar integration.',
        'Coupons and loyalty plans.',
        'Reports and expenses.',
      ],
    },
    result: {
      es: 'En desarrollo: todavía no está desplegado.',
      en: 'In development: not deployed yet.',
    },
    links: [],
    gallery: [
      {
        src: servicehub01,
        alt: {
          es: 'Captura de la página de inicio de service-hub: sección principal.',
          en: 'Screenshot of the service-hub home page: hero section.',
        },
        caption: { es: 'Inicio', en: 'Home' },
      },
      {
        src: servicehub02,
        alt: {
          es: 'Captura de la página de inicio de service-hub: servicios disponibles.',
          en: 'Screenshot of the service-hub home page: available services.',
        },
        caption: { es: 'Inicio: servicios', en: 'Home: services' },
      },
      {
        src: servicehub03,
        alt: {
          es: 'Captura de la reserva: selección del servicio deseado.',
          en: 'Screenshot of the booking: choosing the desired service.',
        },
        caption: { es: 'Reserva: servicio', en: 'Booking: service' },
      },
      {
        src: servicehub04,
        alt: {
          es: 'Captura de la reserva: selección de fecha y hora.',
          en: 'Screenshot of the booking: choosing date and time.',
        },
        caption: { es: 'Reserva: fecha y hora', en: 'Booking: date and time' },
      },
      {
        src: servicehub05,
        alt: {
          es: 'Captura de la reserva: datos del cliente.',
          en: 'Screenshot of the booking: customer details.',
        },
        caption: { es: 'Reserva: datos del cliente', en: 'Booking: customer details' },
      },
      {
        src: servicehub06,
        alt: {
          es: 'Captura de la vista de administración: reservas en lista, ordenadas por fecha.',
          en: 'Screenshot of the admin view: reservations as a list, sorted by date.',
        },
        caption: { es: 'Reservas en lista (administración)', en: 'Reservations list (admin)' },
      },
      {
        src: servicehub07,
        alt: {
          es: 'Captura de la vista de administración: reservas de un solo día, organizadas por horas.',
          en: 'Screenshot of the admin view: reservations for a single day, organized by the hour.',
        },
        caption: { es: 'Agenda por horas (administración)', en: 'Hourly schedule (admin)' },
      },
    ],
  },
];
