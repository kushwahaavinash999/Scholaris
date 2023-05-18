let search = document.getElementById('search');
let search_icon = document.getElementById('search_icon');

search_icon.addEventListener('click', () => {
    search.classList.toggle('search_input');
})

const scholarships= [
    
    {
        name: "Andaman and Nicobar Island",
        url: "national/andamandnicobar.html"
    },
    {
        name: "Andra Pradesh",
        url: "national/andrapradesh.html"
    },
    {
        name: "Arunachal Pradesh",
        url: "national/arunachalpradesh.html"
    },
    {
        name: "Assam",
        url: "national/assam.html"
    },
    {
        name: "Bihar",
        url: "national/bihar.html"
    },
    {
        name: "Chandigarh",
        url: "national/chandigarh.html"
    },
    {
        name: "Chhattisgarh",
        url: "national/chhattisgarh.html"
    },
    {
        name: "Dadra and Nagar Haweli",
        url: "national/dadarnagar.html"
    },
    {
        name: "Daman and Diu",
        url: "national/damandiu.html"
    },
    {
        name: "Delhi",
        url: "national/delhi.html"
    },
    {
        name: "Goa",
        url: "national/goa.html"
    },
    {
        name: "Gujrat",
        url: "national/gujrat.html"
    },
    {
        name: "Haryana",
        url: "national/haryana.html"
    },
    {
        name: "Himachal",
        url: "national/himanchal.html"
    },
    {
        name: "Jammu and Kashmir",
        url: "national/jammuandkashmir.html"
    },
    {
        name: "Jharkhand",
        url: "national/jharkhand.html"
    },
    {
        name: "Karnataka",
        url: "national/karnataka.html"
    },
    {
        name: "Kerela",
        url: "national/kerela.html"
    },
    {
        name: "Lakshadweep",
        url: "national/lakshadweep.html"
    },
    {
        name: "Madhya Pradesh",
        url: "national/madhyapradesh.html"
    },
    {
        name: "Maharastra",
        url: "national/maharastra.html"
    },
    {
        name: "Manipur",
        url: "national/manipur.html"
    },
    {
        name: "Meghalaya",
        url: "national/meghalaya.html"
    },
    {
        name: "Mizoram",
        url: "national/mizoram.html"
    },
    {
        name: "Nagaland",
        url: "national/nagaland.html"
    },
    {
        name: "Orissa",
        url: "national/orrisa.html"
    },
    {
        name: "Puducherry",
        url: "national/puducherry.html"
    },
    {
        name: "Punjab",
        url: "national/punjab.html"
    },
    {
        name: "Rajasthan",
        url: "national/rajasthan.html"
    },
    {
        name: "Sikkim",
        url: "national/sikkim.html"
    },
    {
        name: "Tamil Nadu",

        url: "national/tamilnadu.html"
    },
    {
        name: "Telangana",
        url: "national/telangna.html"
    },
    {
        name: "Tripura",
        url: "national/tripura.html"
    },
    {
        name: "Uttar Pradesh",
        url: "national/uttarpradesh.html"
    },
    {
        name: "Uttrakhand",
        url: "national/uttrakhand.html"
    },
    {
        name: "West Bengal",
        url: "national/westbengal.html"
    }
]


let search_bx2 = document.getElementsByClassName('search_bx2')[0];


window.addEventListener('load', () => {
    scholarships.forEach(element => {
        const { name , url } = element;

        let card = document.createElement('a');
        card.href = url;
        card.innerHTML = `<div class="content2">
                             <h6>${name}</h6>
                         </div>`;
        search_bx2.appendChild(card);
    });
});


search.addEventListener('keyup', () => {
    let filter = search.value.toUpperCase();
    let a = search_bx2.getElementsByTagName('a');

    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('content2')[0];
        let c = b.getElementsByTagName('h6')[0];

        let TextValue = c.textContent || c.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
            search_bx2.style.visibility = "visible";
            search_bx2.style.opacity = 1;
        } else {
            a[i].style.display = 'none';
        }
        if (search.value == 0) {
            search_bx2.style.visibility = "hidden";
            search_bx2.style.opacity = 0;
        }
    }
})

