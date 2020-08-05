const form = document.querySelector('#form');

const findMusic = async (artista, musica) => {
    try{
        const response = await fetch(`https://api.vagalume.com.br/search.php?art=${artista}&mus=${musica}&apikey={key}`);
        return response;
    }catch(err){
        console.log(err);
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    doSubmit();
});

async function doSubmit(){
    const lyricBlock = document.querySelector('#lyric');
    const artista = document.querySelector('#authorInput');
    const musica = document.querySelector('#songInput');
    lyricBlock.innerHTML = '<div class="spinner-grow" role="status"></div>';

    try{
        const arrayJson = await findMusic(artista.value, musica.value);
        const arrayLetra = await arrayJson.json();
        console.log(arrayLetra);
        const letra = arrayLetra.mus[0].text;
        lyricBlock.innerHTML = letra;
    }catch(err){
        console.log(err);
        lyricBlock.innerHTML = '<div class="alert alert-danger" role="alert">Música não encontrada</div>';
    }
    
}