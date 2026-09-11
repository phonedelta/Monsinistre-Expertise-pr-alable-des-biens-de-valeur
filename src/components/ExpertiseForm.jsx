import { useRef, useState } from 'react'
import { ArrowRight, Check, ClipboardList } from 'lucide-react'
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

const fieldTargets = {
  fullName: 'fullName',
  phone: 'phone',
  city: 'city',
  assetTypes: 'assetTypes-0',
  assetCount: 'assetCount-0',
  location: 'location-0',
  motivation: 'motivation-0',
  timing: 'timing-0',
}

const fieldLabels = {
  fullName: 'Nom et prénom',
  phone: 'Téléphone / WhatsApp',
  city: 'Ville',
  assetTypes: 'Type de bien',
  assetCount: 'Nombre de biens',
  location: 'Localisation des biens',
  motivation: 'Raison de l’expertise',
  timing: 'Délai',
}

function validate(values) {
  const errors = {}
  if (!values.fullName.trim()) errors.fullName = 'Ce champ est obligatoire.'
  if (!values.phone.trim()) {
    errors.phone = 'Ce champ est obligatoire.'
  } else if (!/^[+\d][\d\s().-]{6,}$/.test(values.phone.trim())) {
    errors.phone = 'Veuillez saisir un numéro de téléphone valide.'
  }
  if (!values.city.trim()) errors.city = 'Ce champ est obligatoire.'
  if (!values.assetTypes.length) {
    errors.assetTypes = 'Veuillez sélectionner une option.'
  }
  if (!values.assetCount) {
    errors.assetCount = 'Veuillez sélectionner une option.'
  }
  if (!values.location) {
    errors.location = 'Veuillez sélectionner une option.'
  }
  if (!values.motivation) {
    errors.motivation = 'Veuillez sélectionner une option.'
  }
  if (!values.timing) {
    errors.timing = 'Veuillez sélectionner une option.'
  }
  return errors
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
      <label htmlFor={id}>
        {label} <span aria-hidden="true">*</span>
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
  legend,
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
      <legend>
        {legend} {required && <span aria-hidden="true">*</span>}
      </legend>
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
  const [errors, setErrors] = useState({})
  const summaryRef = useRef(null)

  const setTextValue = (field) => (event) => {
    const nextValue = event.target.value
    setValues((current) => ({ ...current, [field]: nextValue }))
    if (errors[field]) {
      setErrors((current) => {
        const nextErrors = { ...current }
        delete nextErrors[field]
        return nextErrors
      })
    }
  }

  const validateOnBlur = (field) => {
    const fieldErrors = validate(values)
    setErrors((current) => {
      const nextErrors = { ...current }
      if (fieldErrors[field]) nextErrors[field] = fieldErrors[field]
      else delete nextErrors[field]
      return nextErrors
    })
  }

  const toggleCheckbox = (field, option) => {
    setValues((current) => {
      const selected = current[field]
      const nextSelected = selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option]
      return { ...current, [field]: nextSelected }
    })
    if (errors[field]) {
      setErrors((current) => {
        const nextErrors = { ...current }
        delete nextErrors[field]
        return nextErrors
      })
    }
  }

  const selectRadio = (field, option) => {
    setValues((current) => ({ ...current, [field]: option }))
    if (errors[field]) {
      setErrors((current) => {
        const nextErrors = { ...current }
        delete nextErrors[field]
        return nextErrors
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length) {
      requestAnimationFrame(() => summaryRef.current?.focus())
      return
    }

    onRequestSubmit?.(values)
  }

  return (
    <section
      id="expertise-form"
      className="section-shell form-shell scroll-mt-8"
    >
      <div className="container-shell">
        <Reveal>
          <form className="form-card" onSubmit={handleSubmit} noValidate>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-xl">
                <span className="section-eyebrow">Demande d’expertise</span>
                <h2 className="section-title">
                  Demandez votre expertise préalable
                </h2>
                <p className="section-lead">
                  Quelques informations nous permettent de comprendre votre
                  patrimoine et votre besoin avant de vous contacter.
                </p>
              </div>
              <div className="icon-box hidden h-14 w-14 sm:grid" aria-hidden="true">
                <ClipboardList size={24} />
              </div>
            </div>

            {Object.keys(errors).length > 0 && (
              <div
                ref={summaryRef}
                className="error-summary"
                role="alert"
                tabIndex="-1"
                aria-labelledby="error-summary-title"
              >
                <h3 id="error-summary-title">
                  Veuillez corriger les champs suivants :
                </h3>
                <ul>
                  {Object.keys(errors).map((field) => (
                    <li key={field}>
                      <a href={`#${fieldTargets[field]}`}>
                        {fieldLabels[field]} : {errors[field]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="form-block">
              <h3 className="form-block-title">Vos coordonnées</h3>
              <div className="form-grid two">
                <TextField
                  id="fullName"
                  label="Nom et prénom"
                  value={values.fullName}
                  error={errors.fullName}
                  onChange={setTextValue('fullName')}
                  onBlur={() => validateOnBlur('fullName')}
                  autoComplete="name"
                />
                <TextField
                  id="phone"
                  label="Téléphone / WhatsApp"
                  type="tel"
                  value={values.phone}
                  error={errors.phone}
                  onChange={setTextValue('phone')}
                  onBlur={() => validateOnBlur('phone')}
                  autoComplete="tel"
                />
                <TextField
                  id="city"
                  label="Ville"
                  value={values.city}
                  error={errors.city}
                  onChange={setTextValue('city')}
                  onBlur={() => validateOnBlur('city')}
                  autoComplete="address-level2"
                />
              </div>
            </div>

            <div className="form-block">
              <h3 className="form-block-title">Vos biens</h3>
              <div className="grid gap-5">
                <ChoiceGroup
                  name="assetTypes"
                  legend="Quel type de bien souhaitez-vous faire expertiser ?"
                  options={assetOptions}
                  type="checkbox"
                  value={values.assetTypes}
                  error={errors.assetTypes}
                  onChange={(option) => toggleCheckbox('assetTypes', option)}
                  required
                />
                <ChoiceGroup
                  name="assetCount"
                  legend="Combien de biens souhaitez-vous faire expertiser ?"
                  options={countOptions}
                  type="radio"
                  value={values.assetCount}
                  error={errors.assetCount}
                  onChange={(option) => selectRadio('assetCount', option)}
                  required
                />
                <ChoiceGroup
                  name="location"
                  legend="Où se trouvent actuellement ces biens ?"
                  options={locationOptions}
                  type="radio"
                  value={values.location}
                  error={errors.location}
                  onChange={(option) => selectRadio('location', option)}
                  required
                />
              </div>
            </div>

            <div className="form-block">
              <h3 className="form-block-title">Votre besoin</h3>
              <div className="grid gap-5">
                <ChoiceGroup
                  name="motivation"
                  legend="Pourquoi souhaitez-vous réaliser cette expertise ?"
                  options={motivationOptions}
                  type="radio"
                  value={values.motivation}
                  error={errors.motivation}
                  onChange={(option) => selectRadio('motivation', option)}
                  required
                />
                <ChoiceGroup
                  name="documents"
                  legend="Avez-vous déjà des documents concernant ces biens ?"
                  options={documentOptions}
                  type="checkbox"
                  value={values.documents}
                  onChange={(option) => toggleCheckbox('documents', option)}
                />
                <ChoiceGroup
                  name="timing"
                  legend="Quand souhaitez-vous réaliser l’expertise ?"
                  options={timingOptions}
                  type="radio"
                  value={values.timing}
                  error={errors.timing}
                  onChange={(option) => selectRadio('timing', option)}
                  required
                />
              </div>
            </div>

            <div className="mt-8 flex justify-center sm:justify-start">
              <button className="primary-cta group w-full sm:w-auto" type="submit">
                <span>Envoyer ma demande d’expertise</span>
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
