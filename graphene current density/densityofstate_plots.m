% densityofstate_plots.m
% Plots the Dirac Approximation of the Density of States of Graphene vs the
% actual Density of States of Graphene.

%Constants
phi_b = 0.5*e; % in units of eV (Work Function)
t_prime = 2.8*e; % in units of eV 
E0 = 38.3*e; % in units of eV
m = 9.109*10^-31; % mass of free electron
g_sv = 4;
e = 1.6 * 10^-19; % charge of electron
EF = 0.083*e; % in units of eV Fermi Energy for graphene is 0.083eV
k = 1.3806*10^-23; % Boltzmann constant
L_perp = 0.335 * 10^-9;
v_perp = sqrt(2*(E0-phi_b)/m);

x = [0:0.01:20];


% D_actualDOSofgraphene
a = 0.142*10^(-9);
Ac = 3*a^2 * sqrt(3)/2;
lambda = 1/Ac;

D_actualDOSofgraphene = zeros(size(x));
i = 1;
for y = 0:0.01:20
    if y<1
        
        t = e*y;
        total = (1/Ac) * (4/pi^2) * t/t_prime^2 * ...
        1/sqrt(F(t/t_prime)) *...
        ellipticK( (4*t/t_prime) / F(t/t_prime) );
        D_actualDOSofgraphene(i) = total;
    
    else
        t = e*y;
        total = (1/Ac) * (4/pi^2) * t/t_prime^2 * ...
        1/sqrt(4*t/t_prime) *...
        ellipticK( F(t/t_prime) / (4*t/t_prime) );
        D_actualDOSofgraphene(i) = total;
    end
    i = i+1;
end
    
    
plot(x,D_actualDOSofgraphene);
hold on


% D_dirac
vf = 1*10^6; % Fermi velocity of the carriers in graphene
hbar = 1.0546*10^-34;
lambda = 10^(-4);
    


D_dirac = g_sv*x*e/(2*pi*hbar^2*vf^2);
plot(x,D_dirac);
xlabel("Energy/eV");
legend("D_{actualDOS}","D_{dirac}");
