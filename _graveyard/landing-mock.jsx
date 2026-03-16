import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  FileText, 
  ShieldAlert, 
  Users, 
  BarChart3, 
  Download, 
  Bell, 
  Building2, 
  LayoutDashboard, 
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">Verify</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#funcionalidades" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Funcionalidades</a>
            <a href="#beneficios" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Beneficios</a>
            <a href="#audiencia" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Para quién es</a>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all shadow-sm">
              Solicitar acceso anticipado
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 p-4 shadow-lg absolute w-full">
          <div className="flex flex-col space-y-4">
            <a href="#funcionalidades" className="text-sm font-medium text-slate-600">Funcionalidades</a>
            <a href="#beneficios" className="text-sm font-medium text-slate-600">Beneficios</a>
            <a href="#audiencia" className="text-sm font-medium text-slate-600">Para quién es</a>
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium w-full text-center">
              Solicitar acceso anticipado
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50 flex flex-col items-center text-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/40 via-slate-50 to-slate-50"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        
        {/* Copy Centrado */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
          <ShieldAlert className="w-4 h-4" />
          Cumplimiento documental
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight max-w-4xl text-balance">
          Controla el cumplimiento de contratistas desde <span className="text-blue-600">un solo lugar</span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl text-balance leading-relaxed">
          Centraliza documentos, recibe alertas y revisa el estado de cada proveedor en tiempo real.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 w-full sm:w-auto">
            Solicitar acceso anticipado
            <ChevronRight className="w-5 h-5" />
          </button>
          <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 px-8 py-4 rounded-xl text-base font-bold transition-all shadow-sm flex items-center justify-center w-full sm:w-auto">
            Ver plataforma
          </button>
        </div>

        <p className="text-sm text-slate-500 -mt-10 mb-10 max-w-2xl text-balance">
          Para empresas con contratistas, proveedores y alta carga documental.
        </p>

        {/* Mockup Expandido y Centrado */}
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Sombra y glow de fondo */}
          <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/20 to-transparent blur-2xl opacity-60 rounded-[2rem]"></div>
          
          <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden ring-1 ring-slate-900/5">
            {/* Fake Browser Header */}
            <div className="bg-slate-50/90 backdrop-blur border-b border-slate-200 px-4 py-3 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              <div className="h-6 w-64 bg-white border border-slate-200 rounded-md text-xs text-slate-400 flex items-center justify-center font-medium absolute left-1/2 transform -translate-x-1/2">
                <span className="opacity-70 flex items-center gap-1.5">app.verify.com</span>
              </div>
              <div className="w-12"></div> {/* Spacer for symmetry */}
            </div>
            
            {/* App Body - Dashboard Expandido */}
            <div className="p-6 md:p-8 bg-slate-50/50 text-left">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                  <h3 className="font-bold text-2xl text-slate-900">Estado de cumplimiento</h3>
                  <p className="text-sm text-slate-500 mt-1">Documentos, alertas y proveedores</p>
                </div>
                <div className="flex gap-3">
                  <span className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-lg shadow-sm flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600" /> 45 proveedores activos
                  </span>
                  <span className="px-3 py-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-semibold rounded-lg shadow-sm flex items-center gap-2">
                     <CheckCircle2 className="w-4 h-4" /> 83% al día
                  </span>
                </div>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                 <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-sm font-medium text-slate-500 mb-2 block">Vencidos</span>
                    <span className="text-3xl font-bold text-rose-600 flex items-center gap-2"><AlertTriangle className="w-6 h-6"/> 12</span>
                 </div>
                 <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-sm font-medium text-slate-500 mb-2 block">Por vencer</span>
                    <span className="text-3xl font-bold text-amber-500 flex items-center gap-2"><Clock className="w-6 h-6"/> 8</span>
                 </div>
                 <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                    <span className="text-sm font-medium text-slate-500 mb-2 block">Al día</span>
                    <span className="text-3xl font-bold text-emerald-600 flex items-center gap-2"><CheckCircle2 className="w-6 h-6"/> 145</span>
                 </div>
                 <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-start">
                    <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                      Ver reporte <ChevronRight className="w-4 h-4" />
                    </button>
                 </div>
              </div>

              {/* Listado */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden text-left">
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-slate-100 bg-slate-50/80 text-xs font-bold text-slate-500 uppercase tracking-wider">
                   <div className="col-span-6 md:col-span-5">Proveedor</div>
                   <div className="col-span-3 text-center hidden md:block">Documentos</div>
                   <div className="col-span-6 md:col-span-4 text-right">Estado</div>
                </div>
                {[
                  { name: 'Constructora Austral S.A.', service: 'Obras Civiles', docs: '12/12', status: 'Al día', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
                  { name: 'Servicios de Aseo Andes', service: 'Limpieza', docs: '8/10', status: 'Con alerta', color: 'bg-amber-100 text-amber-800 border-amber-200' },
                  { name: 'Seguridad Global Ltda.', service: 'Guardias', docs: '5/8', status: 'Con brechas', color: 'bg-rose-100 text-rose-700 border-rose-200' },
                ].map((item, i) => (
                  <div key={i} className="grid grid-cols-12 gap-4 p-4 border-b border-slate-50 items-center hover:bg-slate-50/80 transition-colors">
                    <div className="col-span-6 md:col-span-5">
                      <p className="text-sm font-bold text-slate-900">{item.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{item.service}</p>
                    </div>
                    <div className="col-span-3 text-center hidden md:block">
                       <span className="text-sm font-medium text-slate-700">{item.docs} subidos</span>
                    </div>
                    <div className="col-span-6 md:col-span-4 text-right flex justify-end">
                       <span className={`text-xs font-bold px-3 py-1.5 rounded-lg border shadow-sm ${item.color}`}>
                         {item.status}
                       </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Badges adaptados al nuevo ancho */}
          <div className="absolute -left-4 md:-left-12 top-24 md:top-32 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 animate-bounce" style={{ animationDuration: '4s' }}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
              </div>
              <div className="text-left hidden md:block">
                <p className="text-sm font-bold text-slate-900">12 documentos críticos</p>
                <p className="text-xs text-slate-500">Revisar esta semana</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 md:-right-12 bottom-16 md:bottom-24 bg-white p-4 rounded-2xl shadow-xl border border-slate-200 animate-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <Bell className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-left hidden md:block">
                <p className="text-sm font-bold text-slate-900">Alerta automática</p>
                <p className="text-xs text-slate-500">Proveedor notificado</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  const problems = [
    {
      icon: <FileText className="w-6 h-6 text-slate-600" />,
      title: "Información dispersa",
      desc: "Correos, planillas y mensajes no dan visibilidad real."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-slate-600" />,
      title: "Brechas invisibles",
      desc: "No siempre se sabe qué está vigente, vencido o incompleto."
    },
    {
      icon: <Clock className="w-6 h-6 text-slate-600" />,
      title: "Riesgo tardío",
      desc: "Los problemas aparecen cuando ya impactan la operación."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">El cumplimiento no se supone. Se verifica.</h2>
          <p className="text-lg text-slate-600">Sin un sistema claro, la documentación se dispersa y el riesgo se detecta tarde.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => (
            <div key={idx} className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center mb-6">
                {prob.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{prob.title}</h3>
              <p className="text-slate-600 leading-relaxed">{prob.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="funcionalidades" className="py-24 bg-slate-900 overflow-hidden relative">
      {/* Dark background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mb-16">
          <span className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-3 block">Producto</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Todo para controlar cumplimiento en un solo lugar</h2>
          <p className="text-lg text-slate-400">Documentación, alertas, dashboard, reportes y roles para actuar a tiempo.</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          
          {/* Card 1: Control Documental (Large) */}
          <div className="md:col-span-3 bg-slate-800 rounded-3xl p-8 border border-slate-700 flex flex-col justify-between overflow-hidden group">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">Control documental</h3>
              <p className="text-slate-400 leading-relaxed">Ordena documentos con estados, vencimientos e historial.</p>
            </div>
            {/* Mockup UI */}
            <div className="bg-slate-900 rounded-xl p-4 border border-slate-700 shadow-inner transform group-hover:-translate-y-1 transition-transform">
              <div className="flex text-xs font-semibold text-slate-500 mb-3 px-2">
                <div className="w-1/2">DOCUMENTO</div>
                <div className="w-1/4">ESTADO</div>
                <div className="w-1/4 text-right">VENCE</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-sm bg-slate-800 p-2.5 rounded-lg border border-slate-700/50">
                  <div className="w-1/2 text-slate-300 truncate pr-2">F30 Certificado Ant...</div>
                  <div className="w-1/4"><span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded">Vigente</span></div>
                  <div className="w-1/4 text-right text-slate-400 text-xs">12 Nov</div>
                </div>
                <div className="flex items-center text-sm bg-slate-800 p-2.5 rounded-lg border border-slate-700/50">
                  <div className="w-1/2 text-slate-300 truncate pr-2">Contrato de Trabajo</div>
                  <div className="w-1/4"><span className="text-[10px] bg-rose-500/20 text-rose-400 px-2 py-0.5 rounded">Vencido</span></div>
                  <div className="w-1/4 text-right text-rose-400 font-medium text-xs">Ayer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Alertas (Large) */}
          <div className="md:col-span-3 bg-slate-800 rounded-3xl p-8 border border-slate-700 flex flex-col justify-between overflow-hidden group">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">Alertas automáticas</h3>
              <p className="text-slate-400 leading-relaxed">Detecta vencimientos antes de que generen una brecha.</p>
            </div>
            {/* Mockup UI */}
            <div className="relative bg-slate-900 rounded-xl p-5 border border-slate-700 shadow-inner h-32 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
              <div className="w-full max-w-sm space-y-3 transform group-hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-slate-800 p-3 rounded-lg border border-slate-600 flex gap-3 items-center shadow-lg">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium">3 documentos por vencer</p>
                    <p className="text-xs text-slate-400">Vencen en 30 días - Empresa ABC</p>
                  </div>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg border border-slate-600 flex gap-3 items-center shadow-lg opacity-70">
                  <div className="w-8 h-8 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium">Licencia de supervisor vencida</p>
                    <p className="text-xs text-slate-400">Bloqueo de acceso generado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Visibilidad (Small) */}
          <div className="md:col-span-2 bg-slate-800 rounded-3xl p-8 border border-slate-700 flex flex-col group">
            <div className="mb-6 flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">Dashboard en tiempo real</h3>
              <p className="text-slate-400 text-sm">Visualiza el estado de cumplimiento por proveedor.</p>
            </div>
            <div className="mt-auto bg-slate-900 p-4 rounded-xl border border-slate-700 flex items-center justify-between">
              <div className="relative w-16 h-16">
                <svg viewBox="0 0 36 36" className="w-16 h-16 transform -rotate-90">
                  <path className="text-slate-700" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="text-blue-500" strokeDasharray="83, 100" strokeWidth="3" strokeLinecap="round" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">83%</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400 mb-1">Proveedores</div>
                <div className="text-sm font-semibold text-white">45 Conformes</div>
                <div className="text-sm font-semibold text-rose-400">4 Observados</div>
              </div>
            </div>
          </div>

          {/* Card 4: Reportes (Small) */}
          <div className="md:col-span-2 bg-slate-800 rounded-3xl p-8 border border-slate-700 flex flex-col group">
            <div className="mb-6 flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">Reportes exportables</h3>
              <p className="text-slate-400 text-sm">Prepara auditorías y seguimiento con un clic.</p>
            </div>
            <div className="mt-auto bg-slate-900 p-4 rounded-xl border border-slate-700 flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="h-2 w-full bg-slate-700 rounded-full mb-2"></div>
                <div className="h-2 w-2/3 bg-slate-700 rounded-full mb-3"></div>
                <button className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors">
                  <Download className="w-3.5 h-3.5" /> Exportar Excel
                </button>
              </div>
            </div>
          </div>

          {/* Card 5: Roles (Small) */}
          <div className="md:col-span-2 bg-slate-800 rounded-3xl p-8 border border-slate-700 flex flex-col group">
             <div className="mb-6 flex-grow">
              <h3 className="text-xl font-bold text-white mb-2">Roles y permisos</h3>
              <p className="text-slate-400 text-sm">Define accesos por perfil, sede o proveedor.</p>
            </div>
            <div className="mt-auto bg-slate-900 p-4 rounded-xl border border-slate-700 space-y-2">
               <div className="flex justify-between items-center text-sm border-b border-slate-700 pb-2">
                 <span className="text-slate-300 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex justify-center items-center text-[10px]">A</div> Admin Central</span>
                 <span className="text-[10px] px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">Total</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                 <span className="text-slate-300 flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-slate-700 flex justify-center items-center text-[10px]">P</div> Proveedor</span>
                 <span className="text-[10px] px-2 py-0.5 bg-slate-700 text-slate-300 rounded">Limitado</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefitsList = [
    { title: "Menos riesgo operativo", desc: "Detecta brechas antes." },
    { title: "Más trazabilidad", desc: "Mantén historial claro." },
    { title: "Visibilidad centralizada", desc: "Todo en un solo panel." },
    { title: "Listo para auditorías", desc: "Exporta lo necesario rápido." },
  ];

  return (
    <section id="beneficios" className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">Menos seguimiento manual. Más control real.</h2>
            <p className="text-lg text-slate-600 mb-8">
              Mejora visibilidad, trazabilidad y capacidad de respuesta.
            </p>
            <div className="space-y-6">
              {benefitsList.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-blue-100 transform rotate-3 rounded-2xl"></div>
             <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Reunión de equipo analizando cumplimiento" 
                className="relative rounded-2xl shadow-lg border border-slate-200 object-cover h-[500px] w-full"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

const Audience = () => {
  return (
    <section id="audiencia" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Hecho para empresas con contratistas</h2>
          <p className="text-lg text-slate-600">Especialmente útil en operaciones con alta exigencia documental.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <Building2 className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Empresas mandantes</h3>
            <p className="text-slate-600">Verifican documentación de contratistas.</p>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <Users className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Proveedores de servicios</h3>
            <p className="text-slate-600">Demuestran cumplimiento a sus clientes.</p>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <LayoutDashboard className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold text-slate-900 mb-3">Operaciones multi-sede</h3>
            <p className="text-slate-600">Centralizan control por ubicación.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-20 bg-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Solicita acceso anticipado a Verify</h2>
        <p className="text-blue-100 text-lg mb-10">
          Conoce una forma más clara de controlar documentación y cumplimiento.
        </p>
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-xl hover:shadow-2xl">
          Solicitar acceso anticipado
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">Verify</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Plataforma de cumplimiento documental para contratistas.
            </p>
            <div className="text-sm text-slate-500">
              <p>Documentos, alertas, dashboard, reportes y roles en un solo lugar.</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Producto</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="#funcionalidades" className="hover:text-blue-400 transition-colors">Funcionalidades</a></li>
              <li><a href="#beneficios" className="hover:text-blue-400 transition-colors">Beneficios</a></li>
              <li><a href="#audiencia" className="hover:text-blue-400 transition-colors">Para quién es</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li><a href="mailto:contacto@verify.com" className="hover:text-blue-400 transition-colors">contacto@verify.com</a></li>
              <li><a href="https://www.verify.com" className="hover:text-blue-400 transition-colors">www.verify.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Verify. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-slate-300">Términos de servicio</a>
            <a href="#" className="hover:text-slate-300">Política de privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-blue-200">
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Benefits />
      <Audience />
      <CTASection />
      <Footer />
    </div>
  );
}
