export const generateSalt = (saltLength: number) => {
    const saltBuffer = new Uint8Array(saltLength)
    window.crypto.getRandomValues(saltBuffer)
    return saltBuffer
}

export enum HmacAlgorithms {
    SHA_256 = 'SHA-256',
    SHA_512 = 'SHA-512'
}

export const pbkdf2Hash = async (
    content: string,
    saltBuffer: Uint8Array,
    resultLength: number,
    iterationCount: number,
    internalHashingAlgorithm: HmacAlgorithms
) => {
    const encoder = new TextEncoder()
    
    const contentBuffer = encoder.encode(content)

    const importedKey = await window.crypto.subtle.importKey(
        'raw',
        contentBuffer,
        { name: 'PBKDF2' },
        false,
        ['deriveBits', 'deriveKey']
    )

    const derivedKey = await window.crypto.subtle.deriveKey(
        {
            name: 'PBKDF2',
            salt: saltBuffer,
            iterations: iterationCount,
            hash: internalHashingAlgorithm.toString()
        },
        importedKey,
        { name: 'AES-GCM', length: resultLength },
        true,
        ['encrypt', 'decrypt']
    );

    const exportedKey = await window.crypto.subtle.exportKey('raw', derivedKey)

    return new Uint8Array(exportedKey)
}