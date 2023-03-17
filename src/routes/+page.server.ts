/** @type {import('./$types').PageServerLoad} */

export async function load({ fetch: any }) {
    const res = await fetch('https://api.agify.io/?name=bella', {
        method: 'GET'
    });

    const data = await res.json();
    console.log(data);
    return {
        props: {
            data: data
        }

    };
}