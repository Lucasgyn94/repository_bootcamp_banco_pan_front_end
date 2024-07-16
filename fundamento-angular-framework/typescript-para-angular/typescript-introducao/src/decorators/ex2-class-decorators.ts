function ApiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version: version, __name: "Lucas"})
    };
}

@ApiVersion("1.10")
class Api {}

const api = new Api();
console.log(api);