import localFont from 'next/font/local'

export const nunito = localFont({
  src: [
    {
      path: './Nunito_200-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Nunito_300-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Nunito_400-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Nunito_500-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Nunito_600-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Nunito_700-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Nunito_800-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Nunito_900-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-nunito',
})
