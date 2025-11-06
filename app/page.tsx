'use client'

import { useState } from 'react'
import { BookOpen, TrendingUp, AlertCircle, Award, ChevronDown, ChevronUp, Search, Database } from 'lucide-react'

interface Topic {
  id: number
  title: string
  category: string
  impact: 'High' | 'Very High' | 'Exceptional'
  rationale: string
  objectives: string[]
  novelty: string
  clinicalSignificance: string
  feasibility: string
  publishedStatus: string
}

export default function Home() {
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const topics: Topic[] = [
    {
      id: 1,
      title: "GLP-1 Receptor Agonist-Associated Gastrointestinal Complications and Hospitalizations: A National Analysis (2019-2021)",
      category: "Emerging Therapies",
      impact: "Exceptional",
      rationale: "GLP-1 agonists (semaglutide, liraglutide) exploded in use during 2019-2021 for diabetes and weight loss. While FDA FAERS data shows GI complications, NO NIS studies have examined hospitalization patterns, costs, pancreatitis, bowel obstruction, and gastroparesis in this population.",
      objectives: [
        "Characterize hospitalization trends for GLP-1-associated GI complications 2019-2021",
        "Compare outcomes (mortality, LOS, costs) vs. non-GLP-1 cohorts",
        "Identify demographic and comorbidity risk factors",
        "Analyze rates of pancreatitis, gastroparesis, bowel obstruction"
      ],
      novelty: "First NIS analysis of GLP-1 GI hospitalizations. Timely given explosive growth in prescriptions and recent FDA warnings.",
      clinicalSignificance: "Will inform prescribing practices and risk stratification for rapidly growing patient population on these medications.",
      feasibility: "High - ICD-10 codes available for GLP-1 use and complications. 2019-2021 captures early adoption surge.",
      publishedStatus: "No NIS studies found. Only FAERS database studies and single-center reports exist."
    },
    {
      id: 2,
      title: "Small Intestinal Bacterial Overgrowth (SIBO) Hospitalizations: First National Epidemiological Analysis",
      category: "Underrecognized Conditions",
      impact: "Very High",
      rationale: "SIBO is increasingly recognized but NO NIS studies exist on hospitalization patterns. ICD-10 code K90.9 (intestinal malabsorption) can identify SIBO admissions combined with specific clinical markers.",
      objectives: [
        "Describe first national estimates of SIBO-related hospitalizations 2016-2021",
        "Characterize demographics, comorbidities, and associated conditions",
        "Analyze outcomes including LOS, costs, and mortality",
        "Identify predictors of admission and readmission"
      ],
      novelty: "First-ever NIS analysis of SIBO hospitalizations. No published national data exists.",
      clinicalSignificance: "Will establish baseline epidemiology for this underdiagnosed condition and guide clinical recognition.",
      feasibility: "Moderate - Requires careful ICD-10 code selection and exclusion criteria to isolate SIBO cases.",
      publishedStatus: "ZERO NIS studies on SIBO hospitalizations found in literature search."
    },
    {
      id: 3,
      title: "Bile Acid Diarrhea: Unrecognized Burden of Hospitalizations and Healthcare Costs (2016-2021)",
      category: "Underrecognized Conditions",
      impact: "Very High",
      rationale: "Bile acid malabsorption affects 25% of IBS-D patients but is severely underdiagnosed. NO NIS studies examine hospitalization burden despite high healthcare costs reported in outpatient studies.",
      objectives: [
        "Quantify hospitalizations for bile acid diarrhea/malabsorption 2016-2021",
        "Assess economic burden and healthcare utilization",
        "Identify associated conditions (cholecystectomy, IBD, IBS-D)",
        "Compare outcomes vs. other chronic diarrhea etiologies"
      ],
      novelty: "First national analysis of a condition affecting millions but rarely studied at the inpatient level.",
      clinicalSignificance: "Will highlight diagnostic gaps and economic impact, potentially changing clinical practice and screening protocols.",
      feasibility: "Moderate - ICD-10 K59.1 (diarrhea) with exclusions, plus K90.89 (other malabsorption). Post-cholecystectomy subset identifiable.",
      publishedStatus: "No NIS studies found. All existing research focuses on outpatient prevalence and diagnosis."
    },
    {
      id: 4,
      title: "Microscopic Colitis Hospitalizations: Gender Disparities, Comorbidities, and Emerging Trends (2016-2021)",
      category: "Evolving Epidemiology",
      impact: "High",
      rationale: "Limited NIS data on microscopic colitis. One 2016-2019 study examined celiac disease association, but comprehensive analysis of demographics, outcomes, and temporal trends is missing. ICD-10 codes only available since October 2016.",
      objectives: [
        "Analyze 5-year trends since ICD-10 code introduction (Oct 2016)",
        "Compare collagenous vs. lymphocytic colitis outcomes",
        "Examine racial/ethnic disparities and gender differences",
        "Assess association with autoimmune conditions (celiac, thyroid, RA)"
      ],
      novelty: "First comprehensive NIS analysis spanning full 5-year period since code availability. Prior study only examined celiac association in 3-year subset.",
      clinicalSignificance: "Will establish national epidemiology for this increasingly recognized cause of chronic diarrhea in elderly.",
      feasibility: "High - ICD-10 codes K52.831 (collagenous) and K52.832 (lymphocytic) available since 2016.",
      publishedStatus: "Only one limited 2016-2019 NIS study on celiac association. No comprehensive analysis exists."
    },
    {
      id: 5,
      title: "Achalasia Treatment Paradigm Shift: Comparing POEM vs. Heller Myotomy Outcomes and Costs in the Modern Era (2016-2021)",
      category: "Evolving Therapies",
      impact: "High",
      rationale: "POEM emerged as alternative to Heller myotomy during this period. Limited NIS data exists (2016-2019 POEM study with 1,885 patients), but comprehensive comparison of both treatments across full 2016-2021 period with readmission analysis is lacking.",
      objectives: [
        "Compare POEM vs. Heller myotomy outcomes (complications, LOS, costs) 2016-2021",
        "Analyze temporal trends as POEM adoption increased",
        "Assess 30-day readmission rates and reasons for both procedures",
        "Identify hospital and patient factors influencing treatment choice"
      ],
      novelty: "First comprehensive NIS comparison across full 6-year period capturing POEM's emergence and adoption trajectory.",
      clinicalSignificance: "Will guide treatment selection and hospital program development for achalasia centers.",
      feasibility: "High - ICD-10 procedure codes available. Prior study provides foundation but lacks comparative analysis.",
      publishedStatus: "Limited 2016-2019 POEM data exists. No comprehensive POEM vs. Heller comparison for 2016-2021."
    },
    {
      id: 6,
      title: "Rumination Syndrome and Cyclic Vomiting Syndrome: National Hospitalization Burden in Disorders of Gut-Brain Interaction",
      category: "Underrecognized Conditions",
      impact: "Very High",
      rationale: "These functional GI disorders are increasingly recognized but NO NIS studies exist. CVS has annual healthcare costs 4x higher than controls driven by inpatient care. Rumination syndrome often misdiagnosed. Virgin territory for research.",
      objectives: [
        "First national estimates of hospitalization rates for both conditions",
        "Characterize demographics, ED utilization, and admission patterns",
        "Quantify economic burden and healthcare resource utilization",
        "Compare outcomes between pediatric and adult populations"
      ],
      novelty: "First-ever NIS analysis of these conditions. Completely novel research area at national level.",
      clinicalSignificance: "Will establish epidemiology and economic impact, improving recognition of these disabling but treatable conditions.",
      feasibility: "Moderate - ICD-10 codes F50.89 (rumination), R11.0/R11.2 (CVS patterns). Requires careful case definition.",
      publishedStatus: "ZERO NIS studies found. Existing literature limited to single-center case series."
    },
    {
      id: 7,
      title: "Autoimmune Hepatitis-Primary Biliary Cholangitis Overlap Syndrome: A Comparative Outcomes Analysis (2016-2021)",
      category: "Overlap Syndromes",
      impact: "High",
      rationale: "One recent NIS study (2016-2020) identified AIH-PBC overlap patients (n=1,380 weighted) with higher ascites and portal hypertension rates. Opportunity exists to extend this to 2021 data and add deeper analysis of treatment patterns, liver transplant outcomes, and long-term mortality.",
      objectives: [
        "Extend analysis to full 2016-2021 dataset with larger cohort",
        "Examine liver transplant rates and post-transplant outcomes",
        "Analyze immunosuppressive treatment patterns and complications",
        "Compare racial/ethnic disparities vs. AIH or PBC alone"
      ],
      novelty: "Builds on preliminary 2016-2020 study with extended timeframe, larger cohort, and focus on treatment/transplant outcomes not previously examined.",
      clinicalSignificance: "Will guide management of this complex overlap syndrome and transplant decision-making.",
      feasibility: "High - ICD-10 codes validated in prior study. Can expand scope and depth of analysis.",
      publishedStatus: "One 2016-2020 NIS study exists but limited scope. Treatment and transplant outcomes not analyzed."
    },
    {
      id: 8,
      title: "COVID-19 Impact on Gastroparesis Hospitalizations: A Before-During-Pandemic Analysis (2016-2021)",
      category: "COVID-19 Impact Studies",
      impact: "Very High",
      rationale: "Extensive gastroparesis NIS data exists pre-pandemic (2007-2018), but NO studies examine pandemic impact. Post-viral gastroparesis is well-documented. 2016-2019 provides baseline; 2020-2021 captures pandemic effects on admissions, outcomes, and new-onset cases.",
      objectives: [
        "Compare gastroparesis hospitalization trends pre-pandemic (2016-2019) vs. pandemic (2020-2021)",
        "Identify new-onset gastroparesis following COVID-19 admission",
        "Analyze changes in demographics, severity, and outcomes",
        "Assess impact on diabetic vs. idiopathic gastroparesis differently"
      ],
      novelty: "First study examining pandemic's impact on gastroparesis hospitalizations. Novel use of interrupted time series analysis.",
      clinicalSignificance: "Will reveal pandemic's impact on this debilitating condition and identify potential surge in post-COVID gastroparesis.",
      feasibility: "High - Extensive baseline data exists. COVID-19 codes allow identification of concurrent/preceding infection.",
      publishedStatus: "No gastroparesis-COVID NIS studies found. Pre-pandemic data abundant but pandemic period unstudied."
    },
    {
      id: 9,
      title: "Diverticular Bleeding in the Aging America: Predictors of Outcomes and Racial Disparities (2016-2021)",
      category: "Health Disparities",
      impact: "High",
      rationale: "Recent 2016-2020 NIS study (28,269 patients) identified age and comorbidity predictors. A 2024 study found racial disparities in diverticular disease. Opportunity exists for focused analysis on racial disparities in bleeding specifically, plus extension to 2021 and analysis of anticoagulation impact.",
      objectives: [
        "Comprehensive racial/ethnic disparity analysis in diverticular bleeding outcomes",
        "Impact of DOACs vs. warfarin on bleeding severity and outcomes",
        "Geographic variations in treatment approaches (endoscopy, embolization, surgery)",
        "Risk stratification model for mortality in diverticular bleeding"
      ],
      novelty: "First NIS study specifically examining racial disparities in diverticular bleeding (not just disease). DOAC impact analysis novel for this condition.",
      clinicalSignificance: "Will highlight disparities and guide anticoagulation management in at-risk populations.",
      feasibility: "High - Recent studies provide foundation. ICD-10 codes well-established.",
      publishedStatus: "2016-2020 outcomes study exists. Racial disparity study (2024) examined disease not bleeding. DOAC impact unstudied."
    },
    {
      id: 10,
      title: "Hepatopulmonary Syndrome vs. Portopulmonary Hypertension: Comparative Analysis of Hepatic Vascular Complications (2016-2021)",
      category: "Cirrhosis Complications",
      impact: "High",
      rationale: "One NIS study on hepatopulmonary syndrome (2012-2018) exists. NO comparative NIS studies between HPS and portopulmonary hypertension despite both being critical pre-transplant screening conditions. Opportunity to analyze both conditions, compare outcomes, and examine transplant rates.",
      objectives: [
        "Compare hospitalization patterns, outcomes, and costs: HPS vs. portopulmonary HTN",
        "Analyze liver transplant rates and waitlist mortality for both conditions",
        "Identify predictors of mortality specific to each condition",
        "Examine temporal trends 2016-2021 as screening protocols evolved"
      ],
      novelty: "First direct comparison of these two hepatic vascular complications using national data. HPS-only study exists but no portopulmonary HTN or comparative analysis.",
      clinicalSignificance: "Will guide pre-transplant screening prioritization and risk stratification for liver transplant candidates.",
      feasibility: "Moderate - ICD-10 codes available. HPS validation from prior study. Portopulmonary HTN code K76.81 identifiable.",
      publishedStatus: "One HPS-only NIS study (2012-2018). No portopulmonary HTN or comparative studies found."
    },
    {
      id: 11,
      title: "Celiac Disease Hospitalizations and Malnutrition: Evolving Epidemiology in the Gluten-Free Era (2016-2021)",
      category: "Evolving Epidemiology",
      impact: "High",
      rationale: "NIS studies show increasing celiac hospitalizations (2007-2017) with 8.3% malnutrition rate (2016-2019 study). Gap exists in analyzing why hospitalizations increase despite better diagnosis and gluten-free product availability. Focus on refractory celiac, cross-contamination admissions, and non-dietary complications.",
      objectives: [
        "Analyze reasons for rising hospitalizations despite earlier diagnosis",
        "Characterize refractory celiac disease admissions and outcomes",
        "Examine malnutrition severity trends and nutritional support patterns",
        "Assess complications: lymphoma, osteoporosis fractures, infections"
      ],
      novelty: "First study examining the paradox of rising hospitalizations in the gluten-free era. Focus on refractory disease and non-dietary complications.",
      clinicalSignificance: "Will identify gaps in celiac disease management and highlight need for better adherence support and refractory disease recognition.",
      feasibility: "High - Prior studies provide foundation. ICD-10 codes well-validated.",
      publishedStatus: "Baseline trend data exists (2007-2017, 2016-2019). Paradox of rising hospitalizations and refractory disease analysis not addressed."
    },
    {
      id: 12,
      title: "Eosinophilic Esophagitis: Gender Disparities in Complications and A Decade of Changing Epidemiology (2016-2021)",
      category: "Health Disparities",
      impact: "High",
      rationale: "Recent 2016-2020 NIS study found males have higher EoE complication rates (obstruction, perforation). Decade-long 2010-2019 study showed prevalence doubled. Opportunity exists for focused analysis on gender-specific risk factors, treatment response disparities, and socioeconomic factors affecting outcomes.",
      objectives: [
        "Deep dive into gender disparities: Why do males have worse outcomes?",
        "Analyze socioeconomic and insurance status impact on complications",
        "Examine racial/ethnic variations in EoE complications",
        "Assess temporal changes in treatment patterns (PPI, steroids, dilation) by gender"
      ],
      novelty: "First focused analysis on mechanisms behind gender disparities. Prior studies identified disparities but didn't explore underlying factors.",
      clinicalSignificance: "Will guide gender-specific screening and treatment intensity, potentially preventing complications in high-risk males.",
      feasibility: "High - Recent studies validate approach. Gender analysis straightforward in NIS.",
      publishedStatus: "Gender disparities identified in 2016-2020 study. Mechanistic and socioeconomic analysis of disparities not performed."
    }
  ]

  const categories = ['all', 'Emerging Therapies', 'Underrecognized Conditions', 'Evolving Epidemiology', 'Evolving Therapies', 'Overlap Syndromes', 'COVID-19 Impact Studies', 'Health Disparities', 'Cirrhosis Complications']

  const filteredTopics = selectedCategory === 'all'
    ? topics
    : topics.filter(t => t.category === selectedCategory)

  const impactColors = {
    'High': 'bg-blue-100 text-blue-800',
    'Very High': 'bg-purple-100 text-purple-800',
    'Exceptional': 'bg-red-100 text-red-800'
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-10 h-10 text-purple-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              NIS Gastroenterology Research Topics
            </h1>
          </div>
          <p className="text-lg text-gray-700 mb-4">
            <strong>12 Unique, High-Impact Research Topics</strong> for National Inpatient Sample Analysis (2016-2021)
          </p>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border-l-4 border-purple-600">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Research Methodology</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Each topic has been verified through comprehensive literature search to ensure <strong>no prior publication exists</strong> or identified significant research gaps. Topics are categorized by impact level (High, Very High, Exceptional) based on clinical significance, novelty, feasibility, and potential to change practice.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-5 h-5 text-gray-600" />
            <h2 className="text-lg font-semibold text-gray-900">Filter by Category</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat === 'all' ? 'All Topics' : cat}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-600">
            Showing <strong>{filteredTopics.length}</strong> topic{filteredTopics.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Topics */}
        <div className="space-y-4">
          {filteredTopics.map(topic => (
            <div
              key={topic.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-2xl"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-purple-600">#{topic.id}</span>
                      <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">
                        {topic.category}
                      </span>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${impactColors[topic.impact]}`}>
                        {topic.impact} Impact
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {topic.rationale}
                    </p>
                  </div>
                </div>

                {/* Toggle Button */}
                <button
                  onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                  className="flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition-colors mt-4"
                >
                  {expandedTopic === topic.id ? (
                    <>
                      <ChevronUp className="w-5 h-5" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-5 h-5" />
                      View Full Details
                    </>
                  )}
                </button>

                {/* Expanded Content */}
                {expandedTopic === topic.id && (
                  <div className="mt-6 pt-6 border-t border-gray-200 space-y-6">
                    {/* Objectives */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-blue-600" />
                        <h4 className="font-semibold text-gray-900">Research Objectives</h4>
                      </div>
                      <ul className="space-y-2 ml-7">
                        {topic.objectives.map((obj, idx) => (
                          <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                            <span className="text-blue-600 font-bold mt-1">•</span>
                            <span>{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Attributes */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-4 border border-green-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Award className="w-5 h-5 text-green-700" />
                          <h4 className="font-semibold text-gray-900">Novelty</h4>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{topic.novelty}</p>
                      </div>

                      <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-200">
                        <div className="flex items-center gap-2 mb-2">
                          <BookOpen className="w-5 h-5 text-orange-700" />
                          <h4 className="font-semibold text-gray-900">Clinical Significance</h4>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{topic.clinicalSignificance}</p>
                      </div>

                      <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-blue-700" />
                          <h4 className="font-semibold text-gray-900">Feasibility</h4>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{topic.feasibility}</p>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-200">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle className="w-5 h-5 text-purple-700" />
                          <h4 className="font-semibold text-gray-900">Publication Status</h4>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{topic.publishedStatus}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">1</span>
              <p><strong>Select Your Topic:</strong> Choose based on your interests, available resources, and institutional strengths</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">2</span>
              <p><strong>Obtain NIS Data:</strong> Access through HCUP (hcup-us.ahrq.gov) - institutional training and data use agreement required</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">3</span>
              <p><strong>Conduct Literature Review:</strong> Verify topic novelty with updated PubMed search before starting analysis</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">4</span>
              <p><strong>Develop Protocol:</strong> Define ICD-10 codes, inclusion/exclusion criteria, and statistical analysis plan</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Why These Topics?</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span><strong>Verified Gaps:</strong> Each topic checked against PubMed and Google Scholar (2016-2025)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span><strong>Timely & Relevant:</strong> Address emerging conditions, therapies, and pandemic impacts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span><strong>High Impact Potential:</strong> Target high-volume conditions, health disparities, and clinical decision-making</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-bold">✓</span>
                <span><strong>Feasible Execution:</strong> ICD-10 codes available, adequate sample sizes expected</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
