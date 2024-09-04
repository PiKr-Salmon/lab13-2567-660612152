import { footerProps } from "@lib/types";

export default function Footer(props : footerProps) {
  return (
    <div className="mt-3">
      <hr />
      <p className="text-secondary text-center">Copyright © {props.year} {props.fullName} {props.studentId}</p>
    </div>
  );
}
