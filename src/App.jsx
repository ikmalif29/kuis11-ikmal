import { useState } from 'react';

function App() {
  const dataBuah = [
    {
      id: 1,
      nama: 'Apel',
      harga: 15000,
      warna: 'Merah',
      asal: 'Malang',
      berat: '200g',
      gambar: 'https://i.pinimg.com/564x/3d/a5/4c/3da54c7d974e142e61541f8901a238ba.jpg',
    },
    {
      id: 2,
      nama: 'Jeruk',
      harga: 12000,
      warna: 'Oranye',
      asal: 'Bali',
      berat: '250g',
      gambar: 'https://i.pinimg.com/736x/d3/0e/84/d30e84cdfcf1e74d4eeb52c34e7b3c23.jpg',
    },
    {
      id: 3,
      nama: 'Pisang',
      harga: 10000,
      warna: 'Kuning',
      asal: 'Bandung',
      berat: '150g',
      gambar: 'https://i.pinimg.com/236x/d2/65/a9/d265a927e7ec20022e81a7974d75cecd.jpg',
    },
    {
      id: 4,
      nama: 'Mangga',
      harga: 20000,
      warna: 'Hijau',
      asal: 'Sumatera',
      berat: '300g',
      gambar: 'https://i.pinimg.com/236x/b7/a5/15/b7a5157880b1144e73bd8be17be1314e.jpg',
    },
    {
      id: 5,
      nama: 'Anggur',
      harga: 25000,
      warna: 'Ungu',
      asal: 'Yogyakarta',
      berat: '100g',
      gambar: 'https://i.pinimg.com/236x/55/be/60/55be605726270fa06917a6dbde69cccb.jpg',
    },
    {
      id: 6,
      nama: 'Semangka',
      harga: 30000,
      warna: 'Merah',
      asal: 'Jakarta',
      berat: '1kg',
      gambar: 'https://i.pinimg.com/236x/8b/b0/0f/8bb00fc9c4b3be344c360051339f8e77.jpg',
    },
  ];

  const [buah, setBuah] = useState(dataBuah);
  const [sortField, setSortField] = useState('id');
  const [ascending, setAscending] = useState(true);

  const handleSort = () => {
    const sortedData = [...buah].sort((a, b) => {
      if (ascending) {
        return a[sortField] > b[sortField] ? 1 : -1;
      } else {
        return a[sortField] < b[sortField] ? 1 : -1;
      }
    });
    setBuah(sortedData);
  };

  const handleFieldChange = (e) => {
    setSortField(e.target.value);
    handleSort();
  };

  const toggleOrder = () => {
    setAscending(!ascending);
    handleSort();
  };

  return (
    <>
      <div className='w-full flex justify-center p-5'>
        <h1 className='font-bold text-5xl'>Daftar Buah</h1>
      </div>
      <div className="flex justify-center my-4 space-x-4 items-center">
        <h1 className='font-bold text-3xl'>Urutkan Berdasarkan</h1>
        <select
          value={sortField}
          onChange={handleFieldChange}
          className="border border-gray-300 px-4 py-2 rounded-lg"
        >
          <option value="id">ID</option>
          <option value="nama">Nama</option>
          <option value="harga">Harga</option>
        </select>
        <button
          onClick={toggleOrder}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          {ascending ? 'Ascending' : 'Descending'}
        </button>
      </div>

      <main className="w-full flex justify-center">
        <div className="grid grid-cols-3 gap-8">
          {buah.map((b) => (
            <div
              key={b.id}
              className="w-80 border-2 border-black flex flex-col items-center rounded-2xl my-3 overflow-hidden p-3 gap-3"
            >
              <img src={b.gambar} alt="" />
              <h1 className='font-bold'>Nama Buah : {b.nama}</h1>
              <h1 className='font-bold'>Harga Buah : {b.harga}</h1>
              <h1 className='font-bold'>Warna Buah : {b.warna}</h1>
              <h1 className='font-bold'>Asal Buah : {b.asal}</h1>
              <h1 className='font-bold'>Berat Buah : {b.berat}</h1>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
