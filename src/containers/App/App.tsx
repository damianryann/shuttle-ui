import React, { FunctionComponent, Fragment } from 'react';

import { AsteroidBanner, Header } from '../../components';

import cookieData from '../../utilities/cookieBanner.json';

import './App.scss';

interface AppProps {}

const App: FunctionComponent<AppProps> = () => {
  return (
    <Fragment>
      <div className="App">
        <Header />
        <section className="container-fluid">
          <div className="container">
            <div className="row py-3">
              <div className="col-xs-12 col-sm-12 col-md-6">
                <h1 id="FitnessFirst">Fitness first!</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Nulla mollis, massa sed varius eleifend,
                  sapien mauris auctor massa, vitae vestibulum velit
                  mauris sed sapien. Mauris neque lacus, eleifend quis
                  tortor ac, malesuada scelerisque felis. Vestibulum
                  fringilla elit sit amet venenatis blandit. Quisque
                  tristique sapien at elementum dignissim. Nam ac
                  neque elit. Vestibulum ante ipsum primis in faucibus
                  orci luctus et ultrices posuere cubilia curae;
                  Mauris neque felis, gravida vitae nunc scelerisque,
                  imperdiet fermentum velit. Integer ultricies justo
                  ut dui sollicitudin, vel facilisis metus accumsan.
                  Nullam id sapien tempus, tristique diam vulputate,
                  vulputate purus. Phasellus condimentum ligula at
                  neque dictum, nec rutrum justo venenatis. Aliquam
                  egestas tortor sit amet ultrices luctus. Cras
                  ultricies odio diam, nec fermentum erat posuere nec.
                  Mauris vitae mi non nisi tempus interdum. Fusce id
                  risus ac arcu auctor placerat eu ac lorem. Donec non
                  leo tellus. Aenean aliquet tortor nec est posuere,
                  ut varius dui tincidunt. Donec ullamcorper lectus
                  pharetra lectus dictum commodo. Aenean imperdiet
                  augue at dolor maximus, eu feugiat nisi
                  sollicitudin.
                </p>
                <p>
                  Nullam quam lacus, mollis eu augue a, feugiat
                  ultrices magna. Cras id justo diam. Maecenas
                  placerat turpis quis dignissim ultrices. Donec
                  dapibus erat at neque commodo porta. Vestibulum a
                  est ut augue elementum laoreet ut in metus. Quisque
                  arcu neque, ullamcorper ut lorem vitae, porta tempus
                  nisl. Morbi at est urna. Curabitur accumsan, arcu
                  sit amet volutpat ultricies, eros arcu blandit ante,
                  id dignissim arcu elit quis nunc. Integer rutrum
                  erat ac tincidunt blandit. Ut et ligula volutpat,
                  dictum neque in, porttitor erat. Donec at quam ut
                  libero iaculis imperdiet. Donec ut tempus nulla.
                  Praesent ultrices ligula urna, id gravida turpis
                  auctor sed. Vivamus faucibus id libero non auctor.
                  Phasellus velit mauris, hendrerit a est a, elementum
                  pharetra lacus. Curabitur pulvinar, nunc in
                  sollicitudin vehicula, lectus sem elementum velit,
                  eget pretium est ipsum in tortor. Praesent eros
                  risus, placerat quis vulputate sit amet, mollis ut
                  dui. Mauris sed tellus augue. Mauris placerat augue
                  odio, eget eleifend neque ullamcorper a. Cras quis
                  odio luctus, volutpat lacus nec, sagittis mauris.
                  Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas. Aenean
                  non pharetra massa, sit amet efficitur augue.
                  Integer felis eros, scelerisque vehicula dictum vel,
                  volutpat a mi. Maecenas pulvinar eros ut turpis
                  pharetra dictum. Donec quis erat at lacus dignissim
                  dignissim. Nullam tortor nisi, vulputate eget
                  pellentesque non, convallis quis eros. Praesent
                  ultricies, leo ac cursus bibendum, enim dolor luctus
                  ex, quis consequat nisi erat id augue. Vivamus vel
                  sapien eu orci porta pellentesque. Integer accumsan
                  vitae mauris a consequat. Etiam id erat vitae magna
                  semper porttitor ac sit amet purus. Donec metus mi,
                  tempor id vulputate vitae, varius at lectus. Nulla
                  facilisi.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid text-white bg-primary">
          <div className="container">
            <div className="row py-4">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <h2 id="SecondFitness" className="text-white">
                  Second fitness!
                </h2>
                <p>
                  Pellentesque volutpat, sem quis egestas feugiat,
                  purus justo mollis justo, et tincidunt purus nisl
                  vel ante. Nunc ornare urna elit, nec faucibus nibh
                  euismod quis. Vivamus sagittis eu ligula quis
                  sagittis. Aliquam et nunc viverra, fermentum sapien
                  eget, interdum ipsum. Maecenas finibus massa ac
                  condimentum imperdiet. Etiam urna nunc, rhoncus non
                  ligula fringilla, iaculis auctor velit. Phasellus
                  mollis ex ut dolor maximus, vitae venenatis felis
                  sagittis. Aenean vitae sapien enim. Duis et mattis
                  quam. Integer tellus quam, eleifend et varius
                  iaculis, aliquam eu lectus. Vivamus at hendrerit
                  magna. Proin maximus lectus in velit auctor, nec
                  sodales nisi accumsan. Curabitur vitae metus
                  iaculis, eleifend arcu vitae, ornare purus. Aenean
                  varius vulputate justo nec mattis. In non purus at
                  nisl suscipit maximus. Maecenas et dui turpis.
                  Pellentesque habitant morbi tristique senectus et
                  netus et malesuada fames ac turpis egestas. Duis
                  malesuada bibendum odio a pharetra. Donec at ex
                  venenatis nulla congue hendrerit at sed sapien. Nam
                  nec feugiat massa. Vestibulum efficitur, elit ut
                  feugiat lacinia, lorem lorem dictum mauris, et
                  semper ante velit ut sem. Maecenas ultrices nisl a
                  massa laoreet condimentum sit amet quis ante. Nunc
                  cursus lacinia sagittis. Pellentesque iaculis ex
                  eget leo tincidunt, in aliquet ligula tristique.
                  Morbi massa libero, molestie quis varius vitae,
                  cursus ac lectus. Etiam tristique tristique varius.
                  Maecenas mauris velit, blandit eget magna sit amet,
                  ullamcorper ullamcorper nisl. Donec eu nisi a ex
                  pulvinar aliquam.
                </p>
                <p>
                  Etiam justo massa, mollis id rutrum sed, aliquet a
                  turpis. Duis interdum odio eu sapien maximus congue.
                  Phasellus mollis auctor arcu id semper. Donec
                  iaculis lacinia venenatis. Pellentesque maximus
                  risus bibendum ullamcorper mollis. Cras ultrices
                  velit sed ipsum vehicula ultrices. Mauris
                  consectetur sem dui, eget posuere arcu scelerisque
                  non. Praesent quis urna vitae odio imperdiet mattis
                  vitae quis nisl. Suspendisse fringilla, magna quis
                  placerat pellentesque, nulla nunc feugiat ante,
                  vitae ultricies neque tortor sit amet sem.
                  Vestibulum eu enim risus. Praesent at euismod mi,
                  sed convallis risus. Aliquam dolor leo, finibus sed
                  diam quis, feugiat auctor urna. Fusce a ultricies
                  nulla, aliquam accumsan risus. Nunc malesuada lorem
                  quis fringilla commodo. In dictum vestibulum urna,
                  vel suscipit tellus hendrerit aliquet. Nunc nibh
                  ligula, placerat in consequat at, auctor eu mauris.
                  Suspendisse nec tortor euismod, sodales sapien
                  suscipit, suscipit metus. Suspendisse at convallis
                  dolor. Nulla placerat odio nec enim aliquam, quis
                  luctus nibh mattis. Morbi porttitor porttitor
                  placerat.
                </p>
                <p>
                  Vivamus sodales elementum tellus in porttitor. Fusce
                  et dignissim quam. Proin in eros nec augue sodales
                  iaculis ac id enim. Proin placerat risus aliquet
                  diam pulvinar auctor. Interdum et malesuada fames ac
                  ante ipsum primis in faucibus. Maecenas iaculis
                  mauris nisl, non gravida nisl semper id. Ut lacinia
                  mauris a odio fermentum, quis euismod nunc volutpat.
                  In eu suscipit diam, eu rhoncus diam. Suspendisse
                  sed consequat erat, vel convallis ligula. Proin eget
                  tellus et diam tempus posuere vel at massa. Nulla
                  luctus, libero et accumsan bibendum, est risus
                  hendrerit ligula, et aliquet dui metus et ligula.
                  Curabitur eget purus non lectus porttitor
                  scelerisque non sed ipsum. Vestibulum ante ipsum
                  primis in faucibus orci luctus et ultrices posuere
                  cubilia curae; Donec ex elit, bibendum mattis mi
                  vitae, volutpat aliquam ipsum. Vivamus sagittis
                  fringilla convallis.
                </p>
                <p>
                  Aliquam tincidunt velit id tellus feugiat congue.
                  Nullam consectetur pellentesque feugiat. Aliquam non
                  lectus a leo tincidunt iaculis sed ac lectus. Donec
                  in erat lacinia, mattis ipsum ac, posuere sapien.
                  Aliquam facilisis ligula sed elit pellentesque
                  sagittis sit amet eu sapien. Maecenas egestas sem ac
                  semper condimentum. Phasellus accumsan, sem et
                  aliquam ultricies, mauris elit tristique arcu, et
                  pretium enim nulla auctor libero. Praesent
                  ullamcorper pellentesque velit, nec sollicitudin
                  arcu tempus eget. Donec pulvinar, eros in ultricies
                  tincidunt, urna sem facilisis tortor, ut mollis enim
                  leo ac justo. Vivamus cursus risus ullamcorper mi
                  ullamcorper ullamcorper. Nam tincidunt sapien eu est
                  dapibus, eget molestie diam egestas.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <AsteroidBanner
        {...cookieData}
        style={{ borderTop: '2px solid #707070' }}
      />
    </Fragment>
  );
};

export default App;
