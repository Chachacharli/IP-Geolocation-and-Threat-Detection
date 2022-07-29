
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6297de26e3msh8b4a0473fd81391p11fdbdjsn71a3d12b19e8',
		'X-RapidAPI-Host': 'ip-geolocation-and-threat-detection.p.rapidapi.com'
	}
};

const fetchIpInfo = ip =>{

    return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, options)
	.then(response => response.json())
	.catch(err => console.error(err));
};


const formulario = document.querySelector('#form');
const input = document.querySelector('#ipInput');
const submit = document.getElementById('submit');
const ipResult = document.querySelector('#ipResult');


formulario.addEventListener('submit', async (e) =>{
    e.preventDefault()
    const valor = document.getElementById('input');
    if(!valor) return

    submit.setAttribute('disable','');
    submit.setAttribute('aria-busy','true');

    const ipInfo = await fetchIpInfo(valor.value);

    if(ipInfo){
        ipResult.innerHTML = JSON.stringify(ipInfo,null,2);
    }

    submit.removeAttribute('disable');
    submit.removeAttribute('aria-busy');


});

console.log()