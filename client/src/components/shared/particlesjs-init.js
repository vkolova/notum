export default {
    selector: '.particlesjs-background',
    color: '#ffffff',
    connectParticles: true,

    responsive: [
        {
            breakpoint: 768,
            options: {
                maxParticles: 70,
                connectParticles: true
            }
        }, {
            breakpoint: 425,
            options: {
                maxParticles: 25,
                connectParticles: true
            }
        }, {
            breakpoint: 320,
            options: {
                maxParticles: 15,
                connectParticles: true
            }
        }
    ]
}
