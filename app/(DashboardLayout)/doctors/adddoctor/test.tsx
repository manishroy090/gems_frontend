import { useState, useCallback, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];
const MAX_SIZE_MB = 5;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

const schema = yup.object({
  title: yup
    .string()
    .trim()
    .required("Title is required")
    .min(3, "Title must be at least 3 characters")
    .max(60, "Title must be under 60 characters"),
  description: yup
    .string()
    .trim()
    .max(200, "Description must be under 200 characters"),
  image: yup
    .mixed()
    .required("Please select an image")
    .test("fileType", "Only JPEG, PNG, WebP, or GIF allowed", (value) => {
      if (!value) return false;
      return ACCEPTED_TYPES.includes(value.type);
    })
    .test("fileSize", `Image must be under ${MAX_SIZE_MB}MB`, (value) => {
      if (!value) return false;
      return value.size <= MAX_SIZE_BYTES;
    }),
});

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
};

export default function ImageUpload() {
  const [preview, setPreview] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [submitted, setSubmitted] = useState(null);
  const fileInputRef = useRef(null);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { title: "", description: "", image: null },
  });

  const imageValue = watch("image");

  const handleFile = useCallback(
    (file) => {
      if (!file) return;
      setValue("image", file, { shouldValidate: true });
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    },
    [setValue]
  );

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDragActive(false);
      const file = e.dataTransfer.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const onDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };
  const onDragLeave = () => setDragActive(false);

  const removeImage = () => {
    setPreview(null);
    setValue("image", null, { shouldValidate: false });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const onSubmit = async (data) => {
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted({ title: data.title, description: data.description, name: data.image.name, size: formatBytes(data.image.size), type: data.image.type, preview });
  };

  const handleReset = () => {
    reset();
    setPreview(null);
    setSubmitted(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  if (submitted) {
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <div style={styles.successIcon}>✓</div>
          <h2 style={styles.successTitle}>Upload complete</h2>
          <img src={submitted.preview} alt="Uploaded" style={styles.successPreview} />
          <div style={styles.metaGrid}>
            <span style={styles.metaLabel}>Title</span>
            <span style={styles.metaValue}>{submitted.title}</span>
            {submitted.description && <>
              <span style={styles.metaLabel}>Description</span>
              <span style={styles.metaValue}>{submitted.description}</span>
            </>}
            <span style={styles.metaLabel}>File</span>
            <span style={styles.metaValue}>{submitted.name}</span>
            <span style={styles.metaLabel}>Size</span>
            <span style={styles.metaValue}>{submitted.size}</span>
            <span style={styles.metaLabel}>Type</span>
            <span style={styles.metaValue}>{submitted.type}</span>
          </div>
          <button onClick={handleReset} style={styles.resetBtn}>Upload another</button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Upload image</h1>
          <p style={styles.subtitle}>JPEG, PNG, WebP or GIF · max {MAX_SIZE_MB} MB</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate style={styles.form}>
          {/* Drop Zone */}
          <Controller
            name="image"
            control={control}
            render={() => (
              <div
                style={{
                  ...styles.dropzone,
                  ...(dragActive ? styles.dropzoneActive : {}),
                  ...(errors.image ? styles.dropzoneError : {}),
                  ...(preview ? styles.dropzoneWithPreview : {}),
                }}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onClick={() => !preview && fileInputRef.current?.click()}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && !preview && fileInputRef.current?.click()}
                aria-label="Image upload area"
              >
                {preview ? (
                  <div style={styles.previewWrapper}>
                    <img src={preview} alt="Preview" style={styles.previewImg} />
                    <div style={styles.previewMeta}>
                      <span style={styles.previewName}>{imageValue?.name}</span>
                      <span style={styles.previewSize}>{imageValue && formatBytes(imageValue.size)}</span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); removeImage(); }}
                      style={styles.removeBtn}
                      aria-label="Remove image"
                    >✕</button>
                  </div>
                ) : (
                  <div style={styles.dropPrompt}>
                    <div style={styles.dropIcon}>⬆</div>
                    <p style={styles.dropText}>
                      {dragActive ? "Drop to upload" : "Drag & drop or click to browse"}
                    </p>
                  </div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept={ACCEPTED_TYPES.join(",")}
                  style={{ display: "none" }}
                  onChange={(e) => handleFile(e.target.files?.[0])}
                />
              </div>
            )}
          />
          {errors.image && <p style={styles.error}>{errors.image.message}</p>}

          {/* Title */}
          <div style={styles.field}>
            <label style={styles.label} htmlFor="title">
              Title <span style={styles.required}>*</span>
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter a title…"
              style={{ ...styles.input, ...(errors.title ? styles.inputError : {}) }}
              {...register("title")}
            />
            {errors.title ? (
              <p style={styles.error}>{errors.title.message}</p>
            ) : (
              <p style={styles.hint}>{(watch("title") || "").length}/60</p>
            )}
          </div>

          {/* Description */}
          <div style={styles.field}>
            <label style={styles.label} htmlFor="description">
              Description <span style={styles.optional}>(optional)</span>
            </label>
            <textarea
              id="description"
              placeholder="Add a short description…"
              rows={3}
              style={{ ...styles.textarea, ...(errors.description ? styles.inputError : {}) }}
              {...register("description")}
            />
            {errors.description ? (
              <p style={styles.error}>{errors.description.message}</p>
            ) : (
              <p style={styles.hint}>{(watch("description") || "").length}/200</p>
            )}
          </div>

          <button type="submit" disabled={isSubmitting} style={{ ...styles.submitBtn, ...(isSubmitting ? styles.submitBtnDisabled : {}) }}>
            {isSubmitting ? "Uploading…" : "Upload image"}
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
    fontFamily: "'DM Sans', sans-serif",
    background: "linear-gradient(135deg, #f0f4ff 0%, #faf0ff 100%)",
  },
  card: {
    background: "#ffffff",
    borderRadius: 20,
    boxShadow: "0 8px 40px rgba(80,60,180,0.10), 0 1.5px 6px rgba(0,0,0,0.06)",
    padding: "2.5rem 2rem",
    width: "100%",
    maxWidth: 480,
  },
  header: { marginBottom: "1.75rem" },
  title: {
    fontSize: 26,
    fontWeight: 700,
    color: "#1a1230",
    margin: 0,
    letterSpacing: "-0.5px",
  },
  subtitle: { fontSize: 13.5, color: "#8b8399", margin: "6px 0 0", fontWeight: 400 },
  form: { display: "flex", flexDirection: "column", gap: "1.25rem" },
  dropzone: {
    border: "2px dashed #d0c8f0",
    borderRadius: 14,
    padding: "2rem 1.5rem",
    cursor: "pointer",
    transition: "border-color 0.18s, background 0.18s",
    background: "#faf8ff",
    textAlign: "center",
    outline: "none",
    position: "relative",
    minHeight: 130,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dropzoneActive: {
    borderColor: "#7c5ff5",
    background: "#f0ecff",
  },
  dropzoneError: {
    borderColor: "#e24b4a",
    background: "#fff5f5",
  },
  dropzoneWithPreview: {
    cursor: "default",
    padding: "1.25rem",
    minHeight: 100,
  },
  dropIcon: { fontSize: 28, marginBottom: 8, color: "#a090e0" },
  dropPrompt: { display: "flex", flexDirection: "column", alignItems: "center" },
  dropText: { fontSize: 14.5, color: "#6d5fb0", margin: 0, fontWeight: 500 },
  previewWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 14,
    width: "100%",
    position: "relative",
  },
  previewImg: {
    width: 68,
    height: 68,
    objectFit: "cover",
    borderRadius: 10,
    border: "1.5px solid #e0d8f8",
    flexShrink: 0,
  },
  previewMeta: { display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 3, flex: 1, minWidth: 0 },
  previewName: { fontSize: 13.5, fontWeight: 600, color: "#2a1a60", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "100%" },
  previewSize: { fontSize: 12, color: "#9585c4" },
  removeBtn: {
    position: "absolute",
    top: -6,
    right: -6,
    width: 24,
    height: 24,
    borderRadius: "50%",
    border: "none",
    background: "#e24b4a",
    color: "#fff",
    fontSize: 12,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    lineHeight: 1,
    padding: 0,
  },
  field: { display: "flex", flexDirection: "column", gap: 4 },
  label: { fontSize: 13.5, fontWeight: 600, color: "#2a1a60" },
  required: { color: "#e24b4a", marginLeft: 2 },
  optional: { fontWeight: 400, color: "#9585c4", fontSize: 12, marginLeft: 4 },
  input: {
    padding: "10px 14px",
    borderRadius: 10,
    border: "1.5px solid #ddd5f8",
    fontSize: 14.5,
    color: "#1a1230",
    outline: "none",
    background: "#faf8ff",
    transition: "border-color 0.15s",
    fontFamily: "inherit",
    width: "100%",
    boxSizing: "border-box",
  },
  textarea: {
    padding: "10px 14px",
    borderRadius: 10,
    border: "1.5px solid #ddd5f8",
    fontSize: 14.5,
    color: "#1a1230",
    outline: "none",
    background: "#faf8ff",
    resize: "vertical",
    fontFamily: "inherit",
    width: "100%",
    boxSizing: "border-box",
    lineHeight: 1.6,
  },
  inputError: { borderColor: "#e24b4a", background: "#fff5f5" },
  error: { fontSize: 12.5, color: "#c0392b", margin: "2px 0 0", fontWeight: 500 },
  hint: { fontSize: 12, color: "#b0a8cc", margin: "2px 0 0", textAlign: "right" },
  submitBtn: {
    padding: "13px",
    borderRadius: 12,
    border: "none",
    background: "linear-gradient(135deg, #7c5ff5 0%, #9b4fcf 100%)",
    color: "#fff",
    fontSize: 15,
    fontWeight: 700,
    cursor: "pointer",
    letterSpacing: "0.2px",
    transition: "opacity 0.15s, transform 0.1s",
    fontFamily: "inherit",
    marginTop: 4,
  },
  submitBtnDisabled: { opacity: 0.6, cursor: "not-allowed" },
  successIcon: {
    width: 52,
    height: 52,
    borderRadius: "50%",
    background: "linear-gradient(135deg,#7c5ff5,#9b4fcf)",
    color: "#fff",
    fontSize: 22,
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 1rem",
  },
  successTitle: { textAlign: "center", fontSize: 20, fontWeight: 700, color: "#1a1230", margin: "0 0 1.25rem" },
  successPreview: {
    width: "100%",
    maxHeight: 220,
    objectFit: "cover",
    borderRadius: 12,
    border: "1.5px solid #e0d8f8",
    marginBottom: "1.25rem",
    display: "block",
  },
  metaGrid: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: "8px 16px",
    background: "#faf8ff",
    borderRadius: 12,
    padding: "1rem 1.25rem",
    marginBottom: "1.5rem",
    border: "1.5px solid #ede8ff",
  },
  metaLabel: { fontSize: 13, color: "#9585c4", fontWeight: 600 },
  metaValue: { fontSize: 13.5, color: "#2a1a60", wordBreak: "break-all" },
  resetBtn: {
    width: "100%",
    padding: "12px",
    borderRadius: 12,
    border: "1.5px solid #c8b8f8",
    background: "transparent",
    color: "#7c5ff5",
    fontSize: 14.5,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "inherit",
  },
};