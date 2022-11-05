import { servicesList } from './servicesList.js';
export const renderServices = (filter = []) => {
    const services = document.getElementById('services');
        
    const servicesHTML = servicesList.reduce((prev, service) => {
        if (filter.length) {
            if (filter === service.filter || service.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())) {
                return prev += `<li class="service" style="background-image: url(./img/services/${service.img});">
                <div class="service__content">
                <h3 class="service__heading">${service.name}</h3>
                <ul class="service__prices">
                ${
                    service.prices.map((price) => {
                        return `<li class="price">${price.value} <sub>${price.discount}</sub></li>`
                    })
                            }
                            
                        </ul>
                    </div>
                </li>`;
            }
        }else {
            return prev += `<li class="service" style="background-image: url(./img/services/${service.img});">
                <div class="service__content">
                <h3 class="service__heading">${service.name}</h3>
                <ul class="service__prices">
                ${
                    service.prices.map((price) => {
                        return `<li class="price">${price.value} <sub>${price.discount}</sub></li>`
                    })
                            }
                            
                        </ul>
                    </div>
                </li>`;
        }
            
            return prev;
        }, [])
        
    services.innerHTML = servicesHTML; 
};
