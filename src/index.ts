import { handleCountry } from "./Country/main";

enum Status {
    SUCCESS,
    LOADING,
    ERROR
}

const status: number | undefined = Status.SUCCESS;

class World {
    private countries: {name: string}[] = [];

    constructor() {
        this.loadCountries();
    }

    loadCountries() {
        this.countries.push({name: 'Brazil'});
        this.countries.push({name: 'Afghanistan'});
    }

	handleCountries() {
		this.countries.forEach(country => {
			console.log(handleCountry(country));
		});
	}
}

function handleWorld(world: World) {
    if (!status) {
        throw new Error("status is undefined");
    }

    return world.handleCountries();
}

const world = new World();
handleWorld(world);
