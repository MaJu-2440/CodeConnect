const uploadBtn = document.getElementById('upload-btn');
const imageUploadInput = document.getElementById('image-upload');

uploadBtn.addEventListener('click', () => {
    imageUploadInput.click();
});

function lerConteudoDoAarquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();

        leitor.onload = () => {
            resolve({ url: leitor.result, nome: arquivo.name });
        };

        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`)
        };

        leitor.readAsDataURL(arquivo);
    })
}

const imagemPrincipal = document.querySelector('.main-image');
const nomeDaImagem = document.querySelector('.container-image-nome p');

imageUploadInput.addEventListener('change', async (evento) => {
    const arquivo = evento.target.files[0];

    if(arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoAarquivo(arquivo);
            imagemPrincipal.src = conteudoDoArquivo.url;
            nomeDaImagem.textContent = conteudoDoArquivo.nome;
        }
        catch (erro) {
            console.error(erro);
        }
    }
})

const inputTags = document.getElementById('tags-projeto');
const listaTags = document.querySelector('.lista-tags');



listaTags.addEventListener('click', (evento) => {
    if(evento.target.classList.contains('remove-tag')) {
        const tagParaRemover = evento.target.parentElement;
        listaTags.removeChild(tagParaRemover);
    }
})

const tagsDisponiveis = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Java", "C++", "PHP", "Ruby", "Swift", "Kotlin", "Front-end", "Back-end", "Full-stack", "DevOps", "Banco de Dados", "API", "Git", "GitHub", "Agile", "Scrum", "UI/UX", "Design", "SEO"];

async function verificarTags(tagTexto) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(tagsDisponiveis.includes(tagTexto));
        }, 1000);
    })
}

inputTags.addEventListener('keypress', async (evento) => {
    if(evento.key === 'Enter') {
        evento.preventDefault();
        const tagTexto = inputTags.value.trim();

        if(tagTexto) {
            try {
                const tagExiste = await verificarTags(tagTexto);
                if (!tagExiste) {
                    alert('Tag não disponível. Tente outra.');
                    return;
                }

                const tagNova = document.createElement('li');
                tagNova.innerHTML = `<p>${tagTexto}</p> <img src="img/close-black.svg" alt="Remover tag" class="remove-tag">`;
                listaTags.appendChild(tagNova);
                inputTags.value = '';
            }
            catch (erro) {
                console.error(erro);
                alert('Erro ao verificar a tag. Tente novamente mais tarde.');
            }
        }
    }
})

const buttonPublicar = document.getElementById('button-publicar');

async function publicarProjeto (nomeProjeto, descricaoProjeto, tagsProjeto) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const deuCerto = Math.random() < 0.5; // Simula 50% de chance de sucesso

            if (deuCerto) {
                resolve('Projeto publicado com sucesso!');
            } else {
                reject('Erro ao publicar o projeto. Tente novamente mais tarde.');
            }
        }, 2000);
    })
}

buttonPublicar.addEventListener('click', async (evento) => {
    evento.preventDefault();

    const nomeProjeto = document.getElementById('nome-projeto').value;
    const descricaoProjeto = document.getElementById('descricao-projeto').value;
    const tagsProjeto = Array.from(listaTags.querySelectorAll('p')).map((tag) => tag.textContent);

    try {
        const resultado = await publicarProjeto(nomeProjeto, descricaoProjeto, tagsProjeto);
        alert(resultado);
    } catch (erro) {
        console.error('Erro ao publicar o projeto:', erro);
        alert('Erro ao publicar o projeto');
    }
})

const buttonDescartar = document.getElementById('button-descartar');

buttonDescartar.addEventListener('click', (evento) => {
    evento.preventDefault();

    const formulario = document.querySelector('form');
    formulario.reset();

    imagemPrincipal.src = 'img/imagem1.png';
    nomeDaImagem.textContent = 'image-projeto.png';

    listaTags.innerHTML = '';
})