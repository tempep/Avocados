const url='https://platzi-avo.vercel.app/api/avo';
const url_img='https://platzi-avo.vercel.app';
const appNode=document.querySelector('#app');
const formatPrice=(price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN',{
        style:'currency',
        currency:'USD'
    }).format(price)

    return newPrice;
}

async function getFetch(){
    const toRender=[];
    const res=await fetch(url);
    const data=await res.json();
    data.data.forEach(item => {
        //crear imagen
        const img=document.createElement('img');
        img.src=`${url_img}/${item.image}`;
        img.className='img-avocado';

        //crear titulo
        const title=document.createElement('h2');
        title.textContent=item.name;
        title.className='title-avocado';
        
        //crear precio
        const price=document.createElement('div');
        price.className='price-avocado';
        price.textContent=formatPrice(item.price);

        const container=document.createElement('div');
        container.className='container-avocado';
        container.append(img,title,price);

        toRender.push(container);
    })
    appNode.className='mt-10 grid grid-cols-2'
    appNode.append(...toRender);
    console.log(data);
}

getFetch();