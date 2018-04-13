% ellipticsolution.m
% Calculates the numerical solution to the current density for thermionic
% emission from graphene

%Constants
c = 1.6e-19; % charge of electron
phi_b = 0.5*c; % in units of eV (Work Function)
t_prime = 2.8*c; % in units of eV 
E0 = 38.3*c; % in units of eV
m = 9.11e-31; % mass of free electron
g_sv = 4;
EF = 0.1*c; % in units of eV Fermi Energy for graphene is 0.083eV
k = 1.3806e-23; % Boltzmann constant
L_perp = 0.335e-9;
v_perp = sqrt(2*(E0-phi_b)/m);

step_size = 1000;
T_max = 400;
T_min = 200;

a = 0.142e-9;
A = 3* (a^2) * sqrt(3)/2;
lambda = (1e-4)*1/A;

C = lambda * (v_perp/L_perp) * (g_sv*c)/(pi^2 * (t_prime)^2);

%epsilon = 0.0001*c; % A small correction factor, for use with integral()

T_array = [T_min:(T_max-T_min)/step_size:T_max];
J_Gr = zeros(size(T_array));

E_eV = [phi_b/c:(3*t_prime-phi_b)/c/step_size:3*t_prime/c];
E_J = c*E_eV;


for i = 1:size(T_array,2)
    J_part1 = zeros(size(E_J));
    
    %{ 
    The Integral Method
    q = integral(@(x) (x./sqrt(F(x/t_prime))).*exp(-1*(x-EF)/(k*T)).*ellipke(  (4*x/t_prime)./(F(x/t_prime))  )...
        ,phi_b,t_prime-epsilon);
    p = integral(@(x) (x./sqrt(4*x/t_prime)).*exp(-1*(x-EF)/(k*T)).*ellipke(  (F(x/t_prime))./(4*x/t_prime)  )...
        ,t_prime+epsilon,3*t_prime);
    total_J = p + q;
    
    J_Gr(i) = C*total_J;
    i = i+1;
    %}
    
    %{ 
    The Split Method using cumtrapz
    To use this, change E_eV to
    E1_eV = [phi_b/c:(t_prime-phi_b)/c/step_size:t_prime/c]
    and another E2_eV =
    [phi_b/c:(3*t_prime-t_prime)/c/step_size:3*t_prime/c]
    
    Create two for loops, one for E1_J and one for E2_J. J_part1 would
    correspond to E1_J whilst J_part2 would correspond to E2_J. Make sure
    to exclude E = t_prime since there is a singularity there.
    
    sol1 = cumtrapz(E1_J,J_part1);
    sol2 = cumtrapz(E2_J,J_part2);
    J_Gr = sol1(end) + sol2(end);
    
    Frankly, the below solution is a bit more tidy.
    
    %}
    
    % The Combined Method using cumtrapz
    for j = 1:size(E_J,2)-1
        if(E_J(j) < t_prime)
            F1 = (1+E_J(j)/t_prime)^2 - (E_J(j)^2/(t_prime)^2 - 1)^2 /4;
            J_part1(j) = C* (E_J(j)/(sqrt(F1))) * ellipke( (4*E_J(j)/t_prime) / F1 ) * exp(-1* (E_J(j)-EF)/(k*T_array(i)) );
        
        else
            F2 = (1+E_J(j)/t_prime)^2 - (E_J(j)^2/(t_prime)^2 - 1)^2 /4;
            J_part1(j) = C* (E_J(j)/sqrt(4*E_J(j)/t_prime)) * ellipke( (F2/(4*E_J(j)/t_prime)) ) * exp(-1* (E_J(j)-EF)/(k*T_array(i)) );
            
        end
    end
    
    
    
    sol1 = cumtrapz(E_J,J_part1);
    J_Gr(i) = sol1(end);
    
    

    
    
        
end

figure
plot(T_array,J_Gr,'r')


% For comparisons to the Dirac Approximation
hbar = (6.626e-34)/(2*pi);
lambda = 1e-4;
vf = 3*t_prime*a/(2*hbar); % Fermi velocity of the carriers in graphene

C = lambda * (v_perp/L_perp) * (g_sv*c)/(2*pi*(hbar)^2 *vf^2);
J_Dirac = zeros(size(T_array));

for l = 1:(size(T_array,2))
    J_Dirac(l) = C*( (k*T_array(l))^2 )*( 1 + (phi_b/(k*T_array(l))) )* exp( -1*(phi_b-EF)/(k*T_array(l)) );
    
end

hold on
plot(T_array,J_Dirac,'b');
legend("J_{Gr}","J_{Dirac}");
xlabel("T/K");
ylabel("J/Am^{-2}");
title("EF = 0.1eV, \Phi_b = 0.5eV",'fontsize',9);
xlim([200 400]);

figure
plot(T_array,J_Dirac./J_Gr);
xlim([200 400])
xlabel("T/K");
ylabel("J_{Dirac}/J_{Gr}");





