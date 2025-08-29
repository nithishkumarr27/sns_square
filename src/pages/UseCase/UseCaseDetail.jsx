import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Briefcase, BarChart2, Zap, BrainCircuit, ArrowLeft } from 'lucide-react';

// Helper component for list items in the main content
const ListItem = ({ children }) => (
    <li className="flex items-start">
        <span className="text-blue-600 mr-3 mt-1 flex-shrink-0">&#8226;</span>
        <span className="text-sm sm:text-base">{children}</span>
    </li>
);

// Main App Component
export default function UseCaseDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [useCaseData, setUseCaseData] = useState(null);
    const [relatedUseCases, setRelatedUseCases] = useState([]);
    const [activeSection, setActiveSection] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUseCaseData = async () => {
            try {
                const response = await fetch('/usecases.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch use case data');
                }
                const data = await response.json();
                
                const currentUseCase = data[id];
                if (!currentUseCase) {
                    throw new Error('Use case not found');
                }

                setUseCaseData(currentUseCase);

                // Set the first section as active by default
                if (currentUseCase.sections && currentUseCase.sections.length > 0) {
                    setActiveSection(currentUseCase.sections[0].id);
                }

                // Get related use cases
                const related = currentUseCase.relatedUseCases?.map(relatedId => data[relatedId]).filter(Boolean) || [];
                setRelatedUseCases(related);

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchUseCaseData();
        }
    }, [id]);

    // Intersection Observer to track which section is in view
    useEffect(() => {
        if (!useCaseData?.sections) return;

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        useCaseData.sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            useCaseData.sections.forEach(section => {
                const element = document.getElementById(section.id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [useCaseData]);

    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Error: {error}</h1>
                    <button 
                        onClick={() => navigate('/usecase')}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Back to Use Cases
                    </button>
                </div>
            </div>
        );
    }

    if (!useCaseData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-600 mb-4">Use case not found</h1>
                    <button 
                        onClick={() => navigate('/usecase')}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Back to Use Cases
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div 
            className="min-h-screen font-sans text-gray-800"
            style={{
                background: 'linear-gradient(180deg, #aab6e2bd 0px, #c2cce79f 100px, #e9e9e9d3 200px)'
            }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
                {/* Back Button */}
                <div className="mb-6 bg-white mr-[1300px] p-2 rounded-md">
                    <button
                        onClick={() => navigate('/usecase')}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Use Cases
                    </button>
                </div>

                <div className="flex flex-col lg:flex-row lg:space-x-8 xl:space-x-12">
                    {/* Left Sidebar Navigation */}
                    <aside className="w-full lg:w-1/5 mb-8 lg:mb-0">
                        <div className="sticky top-4 lg:top-12">
                            <nav>
                                <ul className="flex flex-row lg:flex-col space-x-2 lg:space-x-0 lg:space-y-1 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0">
                                    {useCaseData.sections.map(section => (
                                        <li key={section.id} className="flex-shrink-0 lg:flex-shrink">
                                            <button
                                                onClick={() => handleNavClick(section.id)}
                                                className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 lg:py-4 rounded-md text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap lg:whitespace-normal ${
                                                    activeSection === section.id
                                                        ? 'bg-white text-gray-600 font-semibold'
                                                        : 'text-gray-700 hover:bg-white/20 hover:text-gray-800'
                                                }`}
                                            >
                                                {section.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="w-full lg:w-4/5">
                        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
                            <div>
                                <p className="text-xs sm:text-sm font-semibold px-3 sm:px-4 text-gray-600 uppercase tracking-wider mb-2 sm:mb-3 bg-green-200 rounded-full py-1 w-fit">
                                    {useCaseData.category} Use Case
                                </p>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 leading-tight">
                                    {useCaseData.heroTitle}
                                </h1>
                                
                                {/* Display the use case image */}
                                {useCaseData.image && (
                                    <div className="mt-6 mb-6">
                                        <div className="w-full max-w-4xl mx-auto">
                                            <img 
                                                src={useCaseData.image} 
                                                alt={useCaseData.title}
                                                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}
                                
                                <p className="text-lg text-gray-700 mt-4">
                                    {useCaseData.description}
                                </p>
                            </div>

                            {/* Dynamic Diagram Section - Only for supply-chain */}
                            {useCaseData.id === 'supply-chain' && (
                                <div className="p-4 sm:p-6 lg:p-8 relative overflow-hidden">
                                    <div className="flex flex-col sm:flex-row justify-between items-center relative z-10 space-y-6 sm:space-y-0">
                                        <div className="text-center w-full sm:w-1/3">
                                            <div className="mx-auto bg-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-md mb-3">
                                                <span className="text-xl sm:text-2xl font-bold text-gray-500">2.</span>
                                            </div>
                                            <h3 className="font-semibold text-gray-700 text-sm sm:text-base">Warehouse Automation</h3>
                                        </div>
                                        <div className="text-center w-full sm:w-1/3">
                                            <div className="mx-auto bg-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-md mb-3">
                                                <span className="text-xl sm:text-2xl font-bold text-gray-500">3.</span>
                                            </div>
                                            <h3 className="font-semibold text-gray-700 text-sm sm:text-base">Real-time Monitoring</h3>
                                        </div>
                                        <div className="text-center w-full sm:w-1/3">
                                            <div className="mx-auto bg-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center shadow-md mb-3">
                                                <span className="text-xl sm:text-2xl font-bold text-gray-500">4.</span>
                                            </div>
                                            <h3 className="font-semibold text-gray-700 text-sm sm:text-base">Timely Re-ordering</h3>
                                        </div>
                                    </div>
                                    <div className="hidden sm:block absolute top-1/2 left-0 w-full h-full z-0 transform -translate-y-3/4 mt-1">
                                        <svg width="100%" height="100" viewBox="0 0 800 100" preserveAspectRatio="none">
                                            <path d="M 130 60 C 250 60, 250 20, 400 20 S 550 60, 670 60" stroke="#cbd5e1" strokeWidth="4" fill="none" strokeDasharray="10 5" />
                                        </svg>
                                    </div>
                                </div>
                            )}

                            {/* Dynamic Text Sections */}
                            <article className="space-y-6 sm:space-y-8 lg:space-y-10 prose max-w-none prose-p:text-gray-600 prose-headings:text-gray-900">
                                {useCaseData.sections.map((section) => (
                                    <section key={section.id} id={section.id}>
                                        <h2 className="text-lg sm:text-xl font-semibold">{section.title}</h2>
                                        <p className="text-sm sm:text-base">{section.content}</p>
                                        
                                        {section.challenges && (
                                            <>
                                                <p className="text-sm sm:text-base">Key challenges include:</p>
                                                <ul className="space-y-2 mt-4 not-prose">
                                                    {section.challenges.map((challenge, index) => (
                                                        <ListItem key={index}>{challenge}</ListItem>
                                                    ))}
                                                </ul>
                                            </>
                                        )}

                                        {section.features && (
                                            <>
                                                <p className="text-sm sm:text-base">Our intelligent platform provides:</p>
                                                <ul className="space-y-2 mt-4 not-prose">
                                                    {section.features.map((feature, index) => (
                                                        <ListItem key={index}>{feature}</ListItem>
                                                    ))}
                                                </ul>
                                            </>
                                        )}

                                        {section.benefits && (
                                            <>
                                                <p className="text-sm sm:text-base">Key benefits:</p>
                                                <ul className="space-y-2 mt-4 not-prose">
                                                    {section.benefits.map((benefit, index) => (
                                                        <ListItem key={index}>{benefit}</ListItem>
                                                    ))}
                                                </ul>
                                            </>
                                        )}

                                        {section.additionalContent && (
                                            <p className="mt-4 text-sm sm:text-base">{section.additionalContent}</p>
                                        )}
                                    </section>
                                ))}
                            </article>
                        </div>
                    </main>
                </div>

                {/* Related Use Cases Section */}
                {relatedUseCases.length > 0 && (
                    <section className="mt-12 sm:mt-16 lg:mt-20">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Other Use Cases</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-none lg:max-w-6xl ml-40">
                            {relatedUseCases.map((relatedCase) => (
                                <Link
                                    key={relatedCase.id}
                                    to={`/usecase/${relatedCase.id}`}
                                    className="bg-white rounded-xl shadow-sm p-6 sm:p-8 lg:p-12 hover:shadow-lg transition-shadow duration-300 group"
                                >
                                    <div className="w-full h-48 sm:h-56 lg:h-72 bg-gray-200 rounded-md mb-4 sm:mb-6 overflow-hidden">
                                        {relatedCase.image && (
                                            <img 
                                                src={relatedCase.image} 
                                                alt={relatedCase.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        )}
                                    </div>
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                                        {relatedCase.title}
                                    </h3>
                                    <p className="text-gray-600 mb-3 sm:mb-4 text-base sm:text-lg">
                                        {relatedCase.summary}
                                    </p>
                                    <span className="font-semibold text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base">
                                        Learn More &rarr;
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
