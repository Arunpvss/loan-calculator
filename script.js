function calculateEMI() {
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const months = document.getElementById('months').value;

    if (principal && rate && months) {
        const monthlyRate = rate / 12 / 100;
        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
        document.getElementById('emi-result').innerHTML = `EMI in INR: ₹${emi.toFixed(2)}`;
    } else {
        alert("Please fill in all fields.");
    }
}
