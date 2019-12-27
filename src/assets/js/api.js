const Api = class {
    static doFetch(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(response => {
                if (response.status !== 200) reject(new Error("Status code not OK"))
                
                return response.json()
            })
            .then(json => {
                resolve(json)
            })
            .catch(error => {
                reject(new Error(error))
            })
        })
    }

    static getCertificate() {
        return Api.doFetch('/api/certificate.json')
    }

    static getSkills() {
        return Api.doFetch('/api/skills.json')
    }

    static getProjects() {
        return Api.doFetch('/api/projects.json')
    }
}

export default Api
