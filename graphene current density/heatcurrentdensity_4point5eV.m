% ellipticsolution.m
% Calculates the numerical solution to the current density for thermionic
% emission from graphene

%Constants
c = 1.6e-19; % charge of electron
phi_b = 4.5*c; % in units of eV (Work Function)
t_prime = 2.8*c; % in units of eV 
E0 = 38.3*c; % in units of eV
m = 9.11e-31; % mass of free electron
g_sv = 4;
EF = 0.1*c; % in units of eV Fermi Energy for graphene is 0.083eV
k = 1.3806e-23; % Boltzmann constant
L_perp = 0.335e-9;
v_perp = sqrt(2*(E0-phi_b)/m);

step_size = 1000;
T_max = 1200;
T_min = 600;

a = 0.142e-9;
A = 3* (a^2) * sqrt(3)/2;
lambda = (1e-4)*1/A;

C = lambda * (v_perp/L_perp) * (g_sv)/(pi^2 * (t_prime)^2);

%epsilon = 0.0001*c; % A small correction factor, for use with integral()

T_array = [T_min:(T_max-T_min)/step_size:T_max];
Q_Gr = zeros(size(T_array));

E_eV = [phi_b/c:(3*t_prime-phi_b)/c/step_size:3*t_prime/c];
E_J = c*E_eV;


for i = 1:size(T_array,2)
    Q_part1 = zeros(size(E_J));
    
    % The Combined Method using cumtrapz
    
    for j = 1:size(E_J,2)-1
        
        if(E_J(j) < t_prime)
            
            F2 = (1+E_J(j)/t_prime)^2 - (E_J(j)^2/(t_prime)^2 - 1)^2 /4;
            Q_part1(j) = C* (E_J(j) + k*T_array(i) - EF) * (E_J(j)/sqrt(F(E_J(j)/t_prime))) * ellipke( (4*E_J(j)/t_prime)/F2 ) * exp(-1* (E_J(j)-EF)/(k*T_array(i)) );
        else
            F2 = (1+E_J(j)/t_prime)^2 - (E_J(j)^2/(t_prime)^2 - 1)^2 /4;
            Q_part1(j) = C* (E_J(j) + k*T_array(i) - EF)* (E_J(j)/sqrt(4*E_J(j)/t_prime)) * ellipke( (F2/(4*E_J(j)/t_prime)) ) * exp(-1* (E_J(j)-EF)/(k*T_array(i)) );
        end
        
            
        
    end
    
    
    
    sol1 = cumtrapz(E_J,Q_part1);
    Q_Gr(i) = sol1(end);
    
    

    
    
        
end

figure
plot(T_array,Q_Gr,'r')


% For comparisons to the Dirac Approximation
hbar = (6.626e-34)/(2*pi);
lambda = 1e-4;
vf = 3*t_prime*a/(2*hbar); % Fermi velocity of the carriers in graphene

C = lambda * (v_perp/L_perp) * (g_sv)/(2*pi*(hbar)^2 *vf^2);
Q_Dirac = zeros(size(T_array));

for l = 1:(size(T_array,2))
    Q_Dirac(l) = C*( (phi_b)^2 * (k*T_array(l)) + (3*k*T_array(l) - EF)*(k*T_array(l))*(phi_b+k*T_array(l)) ) * exp(- (phi_b - EF)/(k*T_array(l)));
    
end


hold on
plot(T_array,Q_Dirac,'b');
legend("Q_{Gr}","Q_{Dirac}");
xlabel("T/K");
ylabel("Q/Jm^{-2}s^{-1}");
title("EF = 0.1eV, \Phi_b = 4.5eV",'fontsize',9);
xlim([600 1200]);


figure
plot(T_array,Q_Dirac./Q_Gr);
xlim([600 1200])
xlabel("T/K");
ylabel("Q_{Dirac}/Q_{Gr}");
title("EF = 0.1eV, \Phi_b = 4.5eV",'fontsize',9);

% The efficiency calculation
% Efficiency is defined as Q_Net / (I_Net * V) 
% The numerator is the energy output, the heat current density defined
% herein. The denominator is the energy input, varied by the voltage V. 

T_low = 1200;
T_high = 1800;
V_min = 0;
V_max = 0.01;
V = 0.01; %[V_min: (V_max - V_min) / step_size : V_max];
%Ugly calculations

DiracEfficiency_part1A = exp(- (phi_b - EF)/(k*T_low)) *...
                            (k*T_low)^2 * ...
                            ( (phi_b)^2 / (k*T_low)  + (3*k*T_low-EF)* (phi_b/(k*T_low) + 1) );

 
DiracEfficiency_part1B = exp(c*V/(k*T_high)) *...
                            exp(- (phi_b - EF)/(k*T_high)) *...
                            (k*T_high)^2 *...
                            ( (phi_b)^2 / (k*T_high) + (3*k*T_high-EF)* (phi_b/(k*T_high) + 1)  );

DiracEfficiency_part2A =  c*V *...
                            (k*T_low)^2 *...
                            (1 + phi_b/(k*T_low)) *...
                            exp(- (phi_b - EF)/(k*T_low));
                        
DiracEfficiency_part2B = c*V *...
                            (k*T_high)^2 *...
                            (1+phi_b/(k*T_high)) *...
                            exp(- (phi_b - EF)/(k*T_high)) *...
                            exp(c*V/(k*T_high));
                        
( Q_Dirac(1)/C - exp(c*V/(k*T_high))*Q_Dirac(end)/C ) /...
    (DiracEfficiency_part2A - DiracEfficiency_part2B)
%figure
%plot(V,DiracEfficiency);




