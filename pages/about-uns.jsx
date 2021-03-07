import { useEffect, useContext } from 'react';
import { TransparentNavContext } from './_app';
import MainLayout from 'components/layouts/MainLayout';
import useElementOnScreen from 'hooks/useElementOnScreen';

export default function AboutUNS() {
  const [, setNavTransparent] = useContext(TransparentNavContext);
  const [headerRef, isHeaderVisible] = useElementOnScreen({ threshold: .1 });

  useEffect(() => setNavTransparent?.(isHeaderVisible), [isHeaderVisible]);

  return (
    <MainLayout>
      <section className="w-full mb-16 flex flex-col items-center">
        <img
          ref={headerRef}
          src="https://uns.ac.id/id/wp-content/uploads/rektorat-gedung-1-5.jpg"
          alt="UNS"
          className="w-full"
        />

        <h1 className="my-8 font-medium text-3xl text-center text-blue-500">Universitas Sebelas Maret</h1>

        <article className="w-full max-w-screen-lg py-8 flex flex-col gap-y-6">
          <div>
            <dt className="font-medium text-lg text-indigo-500">Nama Universitas</dt>
            <dd>
              <p>Universitas Sebelas Maret (UNS)</p>
              <p>Peraturan Presiden Nomor 55 tahun 1982</p>
            </dd>
          </div>
          <div>
            <dt className="font-medium text-lg text-indigo-500">Tahun Berdiri</dt>
            <dd>11 Maret 1976</dd>
          </div>
          <div>
            <dt className="font-medium text-lg text-indigo-500">Alamat</dt>
            <dd>Jalan Ir. Sutami 36 Kentingan, Jebres, Surakarta, Jawa Tengah, Indonesia 57126</dd>
          </div>
          <div>
            <dt className="font-medium text-lg text-indigo-500">Telepon</dt>
            <dd>(+62)271-646994</dd>
          </div>
          <div>
            <dt className="font-medium text-lg text-indigo-500">Faximile</dt>
            <dd>(+62)271-646655</dd>
          </div>
          <div>
            <dt className="font-medium text-lg text-indigo-500">Website</dt>
            <dd>
              <ul>
                <li><a href="https://uns.ac.id/id" target="_blank" className="text-blue-700 hover:underline">https://uns.ac.id/id</a> (Bahasa Indonesia)</li>
                <li><a href="https://uns.ac.id/en" target="_blank" className="text-blue-700 hover:underline">https://uns.ac.id/en</a> (English)</li>
              </ul>
            </dd>
          </div>
          <div>
            <dt className="font-medium text-lg text-indigo-500">Email</dt>
            <dd>campus@mail.uns.ac.id</dd>
          </div>
          <div>
            <dt className="font-medium text-lg text-indigo-500">Social Media</dt>
            <dd>
              <ul>
                <li>Blog: <a href="https://civitas.uns.ac.id" target="_blank" className="text-blue-700 hover:underline">http://civitas.uns.ac.id</a></li>
                <li>Facebook: <a href="https://www.facebook.com/uns.official" target="_blank" className="text-blue-700 hover:underline">Universitas Sebelas Maret</a></li>
                <li>Twitter: <a href="https://twitter.com/11MaretUniv" target="_blank" className="text-blue-700 hover:underline">@11MaretUniv</a></li>
                <li>Instagram: <a href="https://instagram.com/uns.official" target="_blank" className="text-blue-700 hover:underline">uns.official</a></li>
                <li>Youtube: <a href="https://www.youtube.com/c/UniversitasSebelasMaretSurakarta/featured" target="_blank" className="text-blue-700 hover:underline">Universitas Sebelas Maret</a></li>
                <li>Linkedin: <a href="https://www.linkedin.com/school/universitas-sebelas-maret/" target="_blank" className="text-blue-700 hover:underline">Universitas Sebelas Maret</a></li>
              </ul>
            </dd>
          </div>
          <div>
            <dt className="font-medium text-lg text-indigo-500">Status Universitas</dt>
            <dd>
              <a href="https://cloud.uns.ac.id/index.php/s/avN9sh6lAMbziS5" target="_blank" className="text-blue-700 hover:underline">Perguruan Tinggi Negeri Badan Hukum (PTN BH). Berdasarkan Peraturan Pemerintah Republik Indonesia Nomor 56 Tahun 2020 tentang Perguruan Tinggi Negeri Badan Hukum. <span>Tanggal 6 Oktober 2020.</span></a>
            </dd>
          </div>
          <div>
            <dt className="font-medium text-lg text-indigo-500">Akreditasi</dt>
            <dd>
              <a href="https://cloud.uns.ac.id/index.php/s/RE7Yn8h6usilXSZ" target="_blank" className="text-blue-700 hover:underline">A (Unggul). Berdasarkan Keputusan Badan Akreditasi Nasional Perguruan Tinggi Nomor 142/SK/BAN-PT/Akred/PT/VII/2018. Tanggal 17 Juli 2018.</a>
            </dd>
          </div>
          <div>
            <dt className="font-medium text-lg text-indigo-500">Mahasiswa Aktif</dt>
            <dd>43,439 (Regisdivasi dan Statistik, Dokumentasi Data per 26 Oktober 2020)</dd>
          </div>
          <div>
            <dt className="font-medium text-lg text-indigo-500">Fakultas</dt>
            <dd>11 Fakultas, 1 Sekolah Vokasi dan 1 Pascasarjana</dd>
          </div>
          <div>
            <dt className="font-medium text-lg text-indigo-500">Jenjang Studi</dt>
            <dd>
              <ul>
                <li>20 Program Doktor</li>
                <li>46 Program Magister</li>
                <li>14 Program Pendidikan Spesialis Medis</li>
                <li>4 Program Profesi</li>
                <li>66 Program Sarjana</li>
                <li>26 Program Sekolah Vokasi</li>
              </ul>
            </dd>
          </div>
          <div>
            <dt className="font-medium text-lg text-indigo-500">Coordinate</dt>
            <dd>@-7.5576139,110.8557427,17z</dd>
          </div>
        </article>
      </section>
    </MainLayout>
  );
}
