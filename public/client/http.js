
class Http {

    async get(url, id) {
        try {
            // const response = await fetch(url + (id || ''), { method: 'get' });
            const response = await fetch(url + (id || ''));
            return await response.json();
        } catch (error) {
            console.error('ERROR GET', error.message);
        }
    }

    async post (url, obj) {
        try {
            const response = await fetch(url, {
                method: 'post',
                body: JSON.stringify(obj),
                headers: { 'Content-Type': 'application/json'}
            });
            return await response.json();
        } catch (error) {
            console.error('ERROR POST', error.message);
        }
    }

    async put (url, id, obj) {
        try {
            const response = await fetch(url + id, {
                method: 'put',
                body: JSON.stringify(obj),
                headers: { 'Content-Type': 'application/json'}
            });
            return await response.json();
        } catch (error) {
            console.error('ERROR PUT', error.message);
        }
    }

    async delete (url, id) {
        try {
            const response = await fetch(url + id, { method: 'delete' });
            return await response.json();
        } catch (error) {
            console.error('ERROR DELETE', error.message);
        }
    }

}

const http = new Http();

export default http;
