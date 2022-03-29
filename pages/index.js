import React from 'react'
import Tweet from '../components/tweet'
import Layout from '../components/layout'

function HomePage() {
  return (
    <Layout>
      <Tweet
        name="Muhammet Türkan"
        slug="muhammet.trkn"
        datetime={new Date('2022-03-23')}
        text={`postcss özelliğinde video çektim ama içinde yok yok :))
        
        
babel, ast, sass, ....`}
      />

      <Tweet
        name="Muhammet Türkan"
        slug="muhammet.trkn"
        datetime={new Date('2022-03-23')}
        text={`🗣️A Milli Futbol Takımı Teknik Direktörü Stefan Kuntz: 
Bizim uluslararası deneyime sahip oyuncularımız var. Portekiz Milli Takımı'nın teknik direktörü bizim birçok şey yapabileceğimizi biliyor. Bunu kendimiz de biliyoruz.`}
      />
    </Layout>
  )
}

export default HomePage
