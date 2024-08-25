'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useTheme } from "next-themes"; 

const QrModal = () => {
    const [qrCodeUrl, setQrCodeUrl] = useState('');
    const { theme } = useTheme();

    useEffect(() => {
        const currentUrl = window.location.href;
        setQrCodeUrl(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(currentUrl)}&bgcolor=${theme === 'light' ? '000' : 'fff'}&color=${theme === 'light' ? 'fff' : '000'}`);
    }, []);

    return (
        <div>
            {qrCodeUrl && (
                <Image src={qrCodeUrl} alt="QR Code" width={55} height={55} />
            )}
        </div>
    );
};

export default QrModal;
