// Device Fingerprint & Single Device Enforcement
function getDeviceFingerprint() {
    return navigator.userAgent + '|' + screen.width + 'x' + screen.height;
}

// Global Auth & Session Logic
async function handleAuth(event) {
    event.preventDefault();
    const type = document.getElementById('formType').value;
    const email = document.getElementById('authEmail').value;
    const password = document.getElementById('authPassword').value;
    const message = document.getElementById('authMessage');

    message.innerText = 'Processing...';
    message.className = 'text-xs text-center font-bold text-yellow-400';

    const deviceId = getDeviceFingerprint();

    if (type === 'signup') {
        const position = document.getElementById('authPosition').value;
        const uplineId = document.getElementById('authUpline').value;

        const { data, error } = await _supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    position: position,
                    upline_id: uplineId,
                    device_id: deviceId
                }
            }
        });

        if (error) {
            message.innerText = error.message;
            message.className = 'text-xs text-center font-bold text-red-500';
        } else {
            message.innerText = 'Account created successfully! Check your email to verify.';
            message.className = 'text-xs text-center font-bold text-green-500';
        }
    } else {
        const { data, error } = await _supabase.auth.signInWithPassword({
            email: email,
            password: password
        });

        if (error) {
            message.innerText = error.message;
            message.className = 'text-xs text-center font-bold text-red-500';
        } else {
            window.location.href = 'dashboard.html';
        }
    }
}
