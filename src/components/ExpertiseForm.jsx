import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Check, ClipboardList } from 'lucide-react'
import Reveal from './Reveal'
import {
  assetOptions,
  countOptions,
  documentOptions,
  locationOptions,
  motivationOptions,
  timingOptions,
} from '../data/landingContent'

const initialValues = {
  fullName: '',
  phone: '',
  city: '',
  assetTypes: [],
  assetCount: '',
  location: '',
  motivation: '',
  documents: [],
  timing: '',
}

const steps = [
  {
    id: 'fullName',
    type: 'text',
    question: 'Quel est votre nom et prénom ?',
    label: 'Nom et prénom',
    inputType: 'text',
    autoComplete: 'name',
    required: true,
  },
  {
    id: 'phone',
    type: 'text',
    question: 'Quel est votre numéro de téléphone / WhatsApp ?',
    label: 'Téléphone / WhatsApp',
    inputType: 'tel',
    autoComplete: 'tel',
    required: true,
  },
  {
    id: 'city',
    type: 'text',
    question: 'Dans quelle ville êtes-vous situé ?',
    label: 'Ville',
    inputType: 'text',
    autoComplete: 'address-level2',
    required: true,
  },
  {
    id: 'assetTypes',
    type: 'checkbox',
    question: 'Quel type de bien souhaitez-vous faire expertiser ?',
    options: assetOptions,
    required: true,
  },
  {
    id: 'assetCount',
    type: 'radio',
    question: 'Combien de biens souhaitez-vous faire expertiser ?',
    options: countOptions,
    required: true,
  },
  {
    id: 'location',
    type: 'radio',
    question: 'Où se trouvent actuellement ces biens ?',
    options: locationOptions,
    required: true,
  },
  {
    id: 'motivation',
    type: 'radio',
    question: 'Pourquoi souhaitez-vous réaliser cette expertise ?',
    options: motivationOptions,
    required: true,
  },
  {
    id: 'documents',
    type: 'checkbox',
    question: 'Avez-vous déjà des documents concernant ces biens ?',
    options: documentOptions,
    required: false,
  },
  {
    id: 'timing',
    type: 'radio',
    question: 'Quand souhaitez-vous réaliser l’expertise ?',
    options: timingOptions,
    required: true,
  },
]

function validateField(id, values) {
  if (id === 'fullName') {
    if (!values.fullName.trim()) return 'Ce champ est obligatoire.'
  }
  if (id === 'phone') {
    if (!values.phone.trim()) return 'Ce champ est obligatoire.'
    if (!/^[+\d][\d\s().-]{6,}$/.test(values.phone.trim())) {
      return 'Veuillez saisir un numéro de téléphone valide.'
    }
  }
  if (id === 'city') {
    if (!values.city.trim()) return 'Ce champ est obligatoire.'
  }
  if (id === 'assetTypes' && !values.assetTypes.length) {
    return 'Veuillez sélectionner une option.'
  }
  if (id === 'assetCount' && !values.assetCount) {
    return 'Veuillez sélectionner une option.'
  }
  if (id === 'location' && !values.location) {
    return 'Veuillez sélectionner une option.'
  }
  if (id === 'motivation' && !values.motivation) {
    return 'Veuillez sélectionner une option.'
  }
  if (id === 'timing' && !values.timing) {
    return 'Veuillez sélectionner une option.'
  }
  return ''
}

function TextField({
  id,
  label,
  type = 'text',
  value,
  error,
  onChange,
  onBlur,
  autoComplete,
}) {
  return (
    <div className="form-field">
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete}
        required
        aria-required="true"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={error ? 'input-error' : ''}
        placeholder={label}
      />
      {error && (
        <p className="field-error" id={`${id}-error`} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

function ChoiceGroup({
  name,
  options,
  type,
  value,
  error,
  onChange,
  required = false,
}) {
  return (
    <fieldset
      className="choice-fieldset"
      aria-required={required}
      aria-invalid={Boolean(error)}
      aria-describedby={error ? `${name}-error` : undefined}
    >
      <legend className="sr-only">{name}</legend>
      <div className="choice-grid">
        {options.map((option, index) => {
          const id = `${name}-${index}`
          const checked =
            type === 'checkbox' ? value.includes(option) : value === option
          return (
            <label
              key={option}
              htmlFor={id}
              className={`choice-card ${checked ? 'choice-card-selected' : ''}`}
            >
              <input
                id={id}
                name={name}
                type={type}
                value={option}
                checked={checked}
                onChange={() => onChange(option)}
              />
              <span className="choice-indicator" aria-hidden="true">
                {type === 'checkbox' && checked && <Check size={12} />}
                {type === 'radio' && checked && (
                  <span className="choice-radio-dot" />
                )}
              </span>
              <span>{option}</span>
            </label>
          )
        })}
      </div>
      {error && (
        <p className="field-error" id={`${name}-error`} role="alert">
          {error}
        </p>
      )}
    </fieldset>
  )
}

export default function ExpertiseForm({ onRequestSubmit }) {
  const [values, setValues] = useState(initialValues)
  const [stepIndex, setStepIndex] = useState(0)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const questionRef = useRef(null)

  const totalSteps = steps.length
  const step = steps[stepIndex]
  const progress = Math.round(((stepIndex + 1) / totalSteps) * 100)
  const isLastStep = stepIndex === totalSteps - 1

  useEffect(() => {
    questionRef.current?.focus()
  }, [stepIndex])

  const setTextValue = (field) => (event) => {
    const nextValue = event.target.value
    setValues((current) => ({ ...current, [field]: nextValue }))
    if (error) setError('')
  }

  const toggleCheckbox = (field, option) => {
    setValues((current) => {
      const selected = current[field]
      const nextSelected = selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option]
      return { ...current, [field]: nextSelected }
    })
    if (error) setError('')
  }

  const selectRadio = (field, option) => {
    setValues((current) => ({ ...current, [field]: option }))
    if (error) setError('')
  }

  const goNext = () => {
    const fieldError = validateField(step.id, values)
    if (fieldError) {
      setError(fieldError)
      return
    }

    if (isLastStep) {
      onRequestSubmit?.(values)
      setSubmitted(true)
      return
    }

    setError('')
    setStepIndex((current) => Math.min(current + 1, totalSteps - 1))
  }

  const goBack = () => {
    setError('')
    setStepIndex((current) => Math.max(current - 1, 0))
  }

  const stepContent =
    step.type === 'text' ? (
      <TextField
        id={step.id}
        label={step.label}
        type={step.inputType}
        value={values[step.id]}
        error={error}
        onChange={setTextValue(step.id)}
        autoComplete={step.autoComplete}
      />
    ) : (
      <ChoiceGroup
        name={step.id}
        options={step.options}
        type={step.type}
        value={values[step.id]}
        error={error}
        required={step.required}
        onChange={(option) =>
          step.type === 'checkbox'
            ? toggleCheckbox(step.id, option)
            : selectRadio(step.id, option)
        }
      />
    )

  return (
    <section
      id="expertise-form"
      className="section-shell form-shell scroll-mt-8"
    >
      <div className="container-shell">
        <Reveal>
          <div className="form-card wizard-card">
            <div className="wizard-intro">
              <span className="section-eyebrow">Demande d’expertise</span>
              <h2 className="section-title">
                Demandez votre expertise préalable
              </h2>
              <p className="section-lead">
                Répondez étape par étape. Quelques informations suffisent pour
                comprendre votre besoin.
              </p>
            </div>

            {submitted ? (
              <div className="wizard-success" role="status">
                <div className="icon-box" aria-hidden="true">
                  <Check size={22} />
                </div>
                <h3>Demande prête</h3>
                <p>
                  Merci. Vos informations sont enregistrées localement. Nous
                  pourrons vous recontacter à partir de ces éléments.
                </p>
              </div>
            ) : (
              <form
                className="wizard-form"
                onSubmit={(event) => {
                  event.preventDefault()
                  goNext()
                }}
                noValidate
              >
                <div className="wizard-progress" aria-hidden="true">
                  <div className="wizard-progress-meta">
                    <span>
                      Étape {stepIndex + 1} / {totalSteps}
                    </span>
                    <span>{progress}%</span>
                  </div>
                  <div className="wizard-progress-track">
                    <div
                      className="wizard-progress-fill"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="wizard-step" key={step.id}>
                  <div className="wizard-step-head">
                    <div
                      className="icon-box wizard-step-icon"
                      aria-hidden="true"
                    >
                      <ClipboardList size={18} />
                    </div>
                    <h3
                      className="wizard-question"
                      ref={questionRef}
                      tabIndex={-1}
                    >
                      {step.question}
                      {step.required ? (
                        <span aria-hidden="true"> *</span>
                      ) : null}
                    </h3>
                  </div>

                  {stepContent}
                </div>

                <div className="wizard-nav">
                  <button
                    type="button"
                    className="wizard-btn-back"
                    onClick={goBack}
                    disabled={stepIndex === 0}
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                    Retour
                  </button>

                  <button type="submit" className="primary-cta wizard-btn-next">
                    <span>
                      {isLastStep
                        ? 'Envoyer ma demande'
                        : 'Continuer'}
                    </span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
