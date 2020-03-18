firebase.auth().onAuthStateChanged(user =>{
    if(user){
        setupUI(user)
        console.log('conectado')
    }else{
        setupUI()
    }
})

//-------------------CADASTRO-----------------------------
var formCadastro = document.querySelector('#form-cadastro')
formCadastro.addEventListener('submit', (e)=>{
    e.preventDefault()

    const email = formCadastro['email-cadastro'].value
    const senha = formCadastro['senha-cadastro'].value
    
    firebase.auth().createUserWithEmailAndPassword(email, senha).then(closeModal)
})
//-------------------CADASTRO-----------------------------

//----------------------LOGIN-----------------------------
var formLogin = document.querySelector('#form-login')
formLogin.addEventListener('submit',(e)=>{
    e.preventDefault()

    const email = formLogin['email-login'].value
    const senha = formLogin['senha-login'].value

    firebase.auth().signInWithEmailAndPassword(email, senha).then(()=>{
        formLogin.reset()
    })
})
//----------------------LOGIN-----------------------------