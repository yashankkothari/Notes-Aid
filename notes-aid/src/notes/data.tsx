import subjects_comps_fy_odd from "./fy/comps/oddSem/subjects";
import subjects_comps_ty_even from "./ty/comps/evenSem/subject";
import subjects_it_ty_even from "./ty/it/evenSem/subject";

const NotesData = {
  fy: {
    comps: {
      odd: subjects_comps_fy_odd,
      even: {},
    },
    it: {
      odd: {},
      even: {},
    },
    excp: {
      odd: {},
      even: {},
    },
  },
  sy: {
    comps: {
      odd: {},
      even: {},
    },
    it: {
      odd: {},
      even: {},
    },
    excp: {
      odd: {},
      even: {},
    },
  },
  ty: {
    comps: {
      odd: {},
      even: subjects_comps_ty_even,
    },
    it: {
      odd: {},
      even: subjects_it_ty_even,
    },
    excp: {
      odd: {},
      even: {},
    },
  },
  ly: {
    comps: {
      odd: {},
      even: {},
    },
    it: {
      odd: {},
      even: {},
    },
    excp: {
      odd: {},
      even: {},
    },
  },
}

export default NotesData;