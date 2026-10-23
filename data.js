// Credenciales estáticas predefinidas en el código fuente (Sin base de datos)[cite: 1]
const USERS = [
    { username: 'comprador', password: '123', role: 'comprador' },
    { username: 'vendedor', password: '123', role: 'vendedor' },
    { username: 'admin', password: 'admin', role: 'administrador' }
];

const INITIAL_PRODUCTS = [
    { id: 1, name: 'Laptop', price: 850.00, img: 'https://via.placeholder.com/200?text=Laptop', seller: 'vendedor' },
    { id: 2, name: 'Smartphone', price: 300.00, img: 'https://via.placeholder.com/200?text=Smartphone', seller: 'vendedor' }
];

if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify(INITIAL_PRODUCTS));
}
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}