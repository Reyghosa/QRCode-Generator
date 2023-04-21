
const formInput = document.getElementById('generatecode');
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e)=> {
    e.preventDefault();

    clearUI()
    const urlInput = document.getElementById('url').value;
    const size = document.getElementById('size').value;
    
    if(urlInput === ''){
        alert('please enter a url')
    }else{
        showTheSpinner()

        setTimeout(() => {
            hideTheSpinner()

            generateCode(urlInput, size);

            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src;
                    createSaveBtn(saveUrl)
            },50)
        }, 1000)
    }
    

    const generateCode = (url, size) => {
        const qrcode = new QRCode('qrcode', {
          text: url,
          width: size,
          height: size,
        });
      };

}

const clearUI = () => {
    qr.innerHTML = '';
    const saveBtn = document.getElementById('save-link');
    if (saveBtn) {
      saveBtn.remove();
    }
  };

const showTheSpinner = () =>{
    document.getElementById('spinner').style.display = 'block'
}

const hideTheSpinner = () =>{
    document.getElementById('spinner').style.display = 'none'
}


const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a');
    link.id = 'save-link';
    link.classList =
      'bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Image';
    document.getElementById('generated').appendChild(link);
  };

hideTheSpinner()

formInput.addEventListener('submit', onGenerateSubmit)