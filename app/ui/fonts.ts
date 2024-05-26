import { Lusitana, Montserrat } from 'next/font/google'
/*  cntrl + spacebar -> dentro de las llaves del import 
    para cambiar de tipo de fuente
*/

export const montserrat = Montserrat({ subsets: ['latin']})

export const lusitana = Lusitana({ 
    weight: ['400', '700'],
    subsets: ['latin']
})