'use client';
import {useEffect, useState} from "react";
import {DynamicCodeBlock} from "fumadocs-ui/components/dynamic-codeblock";
import {brand} from "@/lib/brand";
import {dromosThemes} from "@/lib/code-theme";

// build.dependencies.gradle for Pedro Pathing with ElectroDromos on top. Pedro's version follows its
// latest GitHub release; ElectroDromos needs at least brand.minPedro.
export default function DromosImplementation() {

    const [pedroVersion, setPedroVersion] = useState(brand.minPedro);

    useEffect(() => {
        fetch("https://api.github.com/repos/Pedro-Pathing/PedroPathing/releases/latest")
            .then(response => response.json())
            .then(data => {
                if (data.tag_name) setPedroVersion(data.tag_name.slice(1))})
            .catch(error => console.error(error));
    }, []);

    const code = `repositories {
    maven { url = 'https://repo.dairy.foundation/releases/' }  // Pedro Pathing
    maven { url = '${brand.maven}' }  // ElectroDromos
}

dependencies {
    implementation 'com.pedropathing:revhub:${pedroVersion}'
    implementation 'com.pedropathing:tuning:${brand.pedroTuning}'
    implementation 'me.munchem:electrodromos:${brand.version}'
}`;

    return (
        <DynamicCodeBlock lang="groovy" code={code} options={dromosThemes}/>
    )
}
