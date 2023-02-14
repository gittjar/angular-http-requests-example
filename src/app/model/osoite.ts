/* class Osoite {
    id: number | undefined;
    title: string | undefined;
}

export {Osoite}
*/

export interface Osoite {
    id: number;
    title: string;
   
}

interface Details extends Osoite {
    address?: string;
}